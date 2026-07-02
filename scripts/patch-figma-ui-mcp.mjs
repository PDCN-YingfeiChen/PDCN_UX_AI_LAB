import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const packageRoot = path.join("node_modules", "figma-ui-mcp");
const serverPath = path.join(packageRoot, "server", "code-executor.js");
const pluginPath = path.join(packageRoot, "plugin", "code.js");
const runtimePath = path.join("scripts", "figma-renderer-runtime.js");
const templatesPath = path.join("scripts", "pdcn-screen-templates.runtime.js");
const quiet = process.argv.includes("--quiet");

await patchServerAllowlist();
await patchPluginHandler();

if (!quiet) {
  console.log("Patched figma-ui-mcp with PDCN key-based layout rendering.");
}

async function patchServerAllowlist() {
  let source = await readFile(serverPath, "utf8");
  if (source.includes('"renderPdcnLayout"') && !source.includes('"renderPdcnScreen"')) {
    source = source.replace('"renderPdcnLayout"', '"renderPdcnLayout", "renderPdcnScreen"');
    await writeFile(serverPath, source, "utf8");
    return;
  }
  if (source.includes('"renderPdcnLayout"') && source.includes('"renderPdcnScreen"')) {
    return;
  }

  const target = '  "listComponents", "instantiate",';
  if (!source.includes(target)) {
    throw new Error(`Cannot patch ${serverPath}: WRITE_OPS anchor not found.`);
  }

  source = source.replace(target, '  "listComponents", "instantiate", "renderPdcnLayout", "renderPdcnScreen",');
  await writeFile(serverPath, source, "utf8");
}

async function patchPluginHandler() {
  let source = await readFile(pluginPath, "utf8");
  const startMarker = "// PDCN_RENDER_LAYOUT_START";
  const endMarker = "// PDCN_RENDER_LAYOUT_END";
  const nextHandler = "// ── src/plugin/handlers-tokens.js ──";

  if (source.includes(startMarker)) {
    const start = source.indexOf(startMarker);
    const end = source.indexOf(endMarker, start);
    if (end === -1) {
      throw new Error(`Cannot patch ${pluginPath}: stale PDCN marker is incomplete.`);
    }
    source = `${source.slice(0, start)}${source.slice(end + endMarker.length)}`;
  }

  const runtime = await readFile(runtimePath, "utf8");
  const templates = await readFile(templatesPath, "utf8");
  const keyDictionary = await loadKeyDictionary();
  const handler = buildPluginHandler(runtime, templates, keyDictionary, startMarker, endMarker);

  if (!source.includes(nextHandler)) {
    throw new Error(`Cannot patch ${pluginPath}: plugin handler anchor not found.`);
  }

  source = source.replace(nextHandler, `${handler}\n\n${nextHandler}`);
  await writeFile(pluginPath, source, "utf8");
}

async function loadKeyDictionary() {
  const merged = {};

  const rootDict = await readJsonSafe("component-keys.json");
  if (rootDict) {
    mergeInto(merged, rootDict, null);
  }

  let entries = [];
  try {
    entries = await readdir("keys");
  } catch {
    entries = [];
  }

  for (const entry of entries.sort()) {
    if (!entry.toLowerCase().endsWith(".json")) {
      continue;
    }
    const dict = await readJsonSafe(path.join("keys", entry));
    if (dict) {
      mergeInto(merged, dict, entry.replace(/\.json$/i, ""));
    }
  }

  return merged;
}

async function readJsonSafe(filePath) {
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function mergeInto(target, source, namespace) {
  for (const [name, key] of Object.entries(source)) {
    if (typeof key !== "string") {
      continue;
    }

    if (namespace === "PorscheIcons") {
      target[`${namespace}/${name}`] = key;
      target[`Icon/${name}`] = key;
      continue;
    }

    target[name] = key;
    if (namespace) {
      target[`${namespace}/${name}`] = key;
    }
  }
}

function buildPluginHandler(runtime, templates, keyDictionary, startMarker, endMarker) {
  return `${startMarker}
// Added by scripts/patch-figma-ui-mcp.mjs.
// These operations render PDCN layouts using published component keys.
var PDCN_DEFAULT_KEY_DICTIONARY = ${JSON.stringify(keyDictionary)};

${indent(templates, "")}

handlers.renderPdcnLayout = async function(params) {
  var PDCN_LAYOUT = params && params.layout;
  var KEY_DICTIONARY = params && params.keyDictionary ? params.keyDictionary : PDCN_DEFAULT_KEY_DICTIONARY;
  var FONT_FALLBACK = { family: "PingFang SC", style: "Regular" };
  var RENDER_DIAGNOSTICS = [];

${indent(runtime, "  ")}

  var root = await renderDocument(PDCN_LAYOUT);
  figma.currentPage.selection = [root];
  figma.viewport.scrollAndZoomIntoView([root]);
  figma.notify("Rendered: " + root.name);
  return { nodeId: root.id, name: root.name, diagnostics: RENDER_DIAGNOSTICS };
};

handlers.renderPdcnScreen = async function(params) {
  var layout = buildPdcnScreenLayout(params || {});
  return handlers.renderPdcnLayout({ layout: layout });
};
${endMarker}`;
}

function indent(value, prefix) {
  return String(value)
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}
