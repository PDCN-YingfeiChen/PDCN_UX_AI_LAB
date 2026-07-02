#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const patch = spawnSync(process.execPath, ["scripts/patch-figma-ui-mcp.mjs", "--quiet"], {
  cwd: repoRoot,
  stdio: ["ignore", "ignore", "pipe"],
  encoding: "utf8",
});

if (patch.status !== 0) {
  process.stderr.write("[pdcn-figma-mcp] Failed to patch figma-ui-mcp before startup.\n");
  if (patch.stderr) {
    process.stderr.write(patch.stderr);
  }
  process.exit(patch.status || 1);
}

await import("../node_modules/figma-ui-mcp/server/index.js");
