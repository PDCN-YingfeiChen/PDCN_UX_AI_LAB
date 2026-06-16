import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const inputPath = readArgValue(args, "--input") || path.join("generated", "agent-layout.json");
const pluginCodePath = readArgValue(args, "--plugin") || path.join("figma-plugin-yc-20260616", "code.js");

const payload = await readJsonRequired(inputPath);
validatePayload(payload, inputPath);

const keyDictionary = await loadKeyDictionary();
await injectIntoPlugin(payload, pluginCodePath);
await injectKeysIntoPlugin(keyDictionary, pluginCodePath);

console.log(`Agent layout embedded from ${inputPath}`);
console.log(`Next step: open PDCN UX Helper in Figma and click 渲染画布.`);

async function readJsonRequired(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function validatePayload(payload, filePath) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error(`${filePath} must contain a JSON object.`);
  }
  if (!payload.frame || typeof payload.frame !== "object") {
    throw new Error(`${filePath} must include a frame object.`);
  }
  if (!Array.isArray(payload.nodes)) {
    throw new Error(`${filePath} must include a nodes array.`);
  }
}

async function loadKeyDictionary() {
  const merged = {};
  let sources = 0;

  const rootDict = await readJsonSafe("component-keys.json");
  if (rootDict) {
    mergeInto(merged, rootDict, null);
    sources += 1;
    console.log(`Loaded ${Object.keys(rootDict).length} key(s) from component-keys.json`);
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
    const filePath = path.join("keys", entry);
    const dict = await readJsonSafe(filePath);
    if (!dict) {
      continue;
    }
    const namespace = entry.replace(/\.json$/i, "");
    mergeInto(merged, dict, namespace);
    sources += 1;
    console.log(`Loaded ${Object.keys(dict).length} key(s) from ${filePath} (namespace "${namespace}")`);
  }

  if (!sources) {
    console.warn("No key files found (component-keys.json or keys/*.json).");
  }

  console.log(`Total merged keys: ${Object.keys(merged).length}`);
  return merged;
}

async function readJsonSafe(filePath) {
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
    console.warn(`Skip ${filePath}: not a JSON object.`);
    return null;
  } catch {
    return null;
  }
}

function mergeInto(target, source, namespace) {
  for (const [name, key] of Object.entries(source)) {
    if (typeof key !== "string") {
      continue;
    }
    target[name] = key;
    if (namespace) {
      target[`${namespace}/${name}`] = key;
    }
  }
}

async function injectKeysIntoPlugin(dict, codePath) {
  let source = await readFile(codePath, "utf8");
  const startMarker = "/* KEYS_START */";
  const endMarker = "/* KEYS_END */";
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error("Key markers not found in plugin code.js");
  }

  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  source = `${before} ${JSON.stringify(dict)} ${after}`;

  await writeFile(codePath, source, "utf8");
  console.log(`Embedded ${Object.keys(dict).length} key(s) into ${codePath}`);
}

async function injectIntoPlugin(data, codePath) {
  let source = await readFile(codePath, "utf8");
  const startMarker = "/* PAYLOAD_START */";
  const endMarker = "/* PAYLOAD_END */";
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error("Payload markers not found in plugin code.js");
  }

  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  source = `${before} ${JSON.stringify(data)} ${after}`;

  await writeFile(codePath, source, "utf8");
  console.log(`Embedded payload into ${codePath}`);
}

function readArgValue(argv, key) {
  const index = argv.findIndex((arg) => arg === key);
  if (index >= 0 && argv[index + 1]) {
    return argv[index + 1];
  }

  const prefixed = argv.find((arg) => arg.startsWith(`${key}=`));
  if (prefixed) {
    return prefixed.split("=")[1];
  }

  return null;
}
