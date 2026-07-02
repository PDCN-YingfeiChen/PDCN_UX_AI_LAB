# PDCN UX Helper Copilot Instructions

This repository is for PDCN Figma design generation through the write-enabled `figma-ui-mcp` server configured as `figma-write`. The local `figma-ui-mcp` install is patched by `scripts/patch-figma-ui-mcp.mjs` with `renderPdcnScreen` and `renderPdcnLayout`, so generated pages can import published Porsche CN components by key. The PDCN UX Helper plugin is only for component key extraction.

When a designer asks to generate a Figma design with AI Agent, follow `AGENTS.md`.

Core workflow:

1. Interview the designer briefly in natural language.
2. Prefer a low-token page brief when a screen template exists; otherwise generate a complete page JSON payload.
3. Save brief payloads to `generated/agent-brief.json`; save full layouts to `generated/agent-layout.json`.
4. Run `npm run agent:screen-script` for brief payloads; run `npm run agent:render-script` for full layouts.
5. Run `npm run validate`.
6. Call `figma_status` to confirm the Figma bridge is connected.
7. Execute `generated/figma-mcp-render.js` through `figma_write`.
8. Tell the designer the design has been generated in Figma.

Important:

- Do not ask designers to write, copy, or paste JSON.
- Do not ask designers to run terminal commands.
- Do not ask designers to open the plugin to render the canvas.
- Do not push to GitHub unless explicitly requested.
- If `figma_status` reports that the bridge plugin is not connected, try `npm run mcp:bridge:run`; if it fails, stop after generating `generated/figma-mcp-render.js` and explain that **Figma UI MCP Bridge** must be running once in Figma Desktop.
- If `figma_write` reports `figma.renderPdcnScreen is not a function` or `figma.renderPdcnLayout is not a function`, run `npm run mcp:patch`, restart the MCP server, and rerun **Figma UI MCP Bridge** in Figma Desktop.
- Use `minHeight: 812` and Auto Layout height for mobile screens instead of clipping content at exactly 812.
- Prefer component instances from `keys/PorscheCNV3.json`, especially namespaced uses like `PorscheCNV3/Text List`.
- Avoid `PorscheCNV3/Text list / Title`; it may fail to import as a direct component.
- Keep Tag components hug-content by omitting fixed width and height unless the designer asks otherwise.
