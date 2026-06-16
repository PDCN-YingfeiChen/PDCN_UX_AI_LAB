# PDCN UX Helper Copilot Instructions

This repository is for the PDCN UX Helper Figma plugin.

When a designer asks to generate a Figma design with AI Agent, follow `AGENTS.md`.

Core workflow:

1. Interview the designer briefly in natural language.
2. Generate a complete page JSON payload.
3. Save it to `generated/agent-layout.json`.
4. Run `npm run agent:embed`.
5. Run `node --check figma-plugin-yc-20260616/code.js`.
6. Tell the designer to open **PDCN UX Helper** in Figma and click **设计稿生成 -> 渲染画布**.

Important:

- Do not ask designers to write, copy, or paste JSON.
- Do not ask designers to run terminal commands.
- Do not push to GitHub unless explicitly requested.
- Use `minHeight: 812` and Auto Layout height for mobile screens instead of clipping content at exactly 812.
- Prefer component instances from `keys/PorscheCNV3.json`, especially namespaced uses like `PorscheCNV3/Text List`.
- Avoid `PorscheCNV3/Text list / Title`; it may fail to import as a direct component.
- Keep Tag components hug-content by omitting fixed width and height unless the designer asks otherwise.
