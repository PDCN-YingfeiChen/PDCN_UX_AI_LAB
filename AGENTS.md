# PDCN UX Helper Agent Guide

Use this guide when an AI Agent is helping a designer generate Figma screens with PDCN UX Helper.

## What This Repository Does

PDCN UX Helper is a Figma development plugin. The Agent creates a page JSON payload, embeds it into `figma-plugin-yc-20260616/code.js`, and the designer clicks **渲染画布** in Figma to render the design.

The designer should not need to write JSON, paste JSON, run terminal commands, or edit code.

## Important Boundary

A normal GPT web chat cannot directly control this plugin. This workflow requires an Agent environment that can read/write this repository and run local commands, such as:

- VS Code GitHub Copilot Agent
- Cursor Agent
- A team-configured local automation Agent
- Another Agent that can edit files and run npm commands in this repository

## Designer-Facing Workflow

When a designer asks to create or modify a design:

1. Ask concise clarifying questions only for missing essentials.
2. Generate a complete Figma JSON payload.
3. Save it to `generated/agent-layout.json`.
4. Run `npm run agent:embed`.
5. Validate with `node --check figma-plugin-yc-20260616/code.js`.
6. Tell the designer to open **PDCN UX Helper** in Figma and click **设计稿生成 -> 渲染画布**.

Do not ask the designer to copy/paste JSON.
Do not ask the designer to edit files.
Do not push to GitHub unless explicitly requested.

## Questions To Ask Designers

Ask in natural language. Keep it short.

- What page do you want to generate?
- Which device size? Default to mobile 375 width if unclear.
- Which component library should be used? Default to `[V3 DS - App] CN Components` when the request is for Porsche CN App.
- What modules should appear on the page?
- What primary CTA should appear at the bottom?
- Are there any required text, price, vehicle, dealer, or status details?

## Default UX Rules

- Mobile app screens default to width `375`.
- Page frame should use Auto Layout vertical.
- Use `minHeight: 812`, not fixed `height: 812`, unless the user explicitly asks for a fixed viewport.
- Let content expand the frame height instead of clipping content.
- Prefer CN component library instances when stable.
- If a component imports but its text cannot be overridden reliably, use a native editable frame/text fallback for that small section.
- Do not force Tag width/height; Tag components should stay hug-content unless the user explicitly asks for fixed sizing.
- Toolbar/bottom action components should appear after content, at the bottom of the generated page.

## Component Library Usage

Use namespaced component references from `keys/PorscheCNV3.json`:

- `PorscheCNV3/Status bar`
- `PorscheCNV3/Header`
- `PorscheCNV3/Tag`
- `PorscheCNV3/Tag-VIP`
- `PorscheCNV3/Divider`
- `PorscheCNV3/Text List`
- `PorscheCNV3/Crest`
- `PorscheCNV3/Tool Bar`
- `PorscheCNV3/Home Indicator`

Avoid direct use of subcomponents that fail import, especially:

- `PorscheCNV3/Text list / Title`

## JSON Payload Shape

Save generated payloads as `generated/agent-layout.json`.

Minimum shape:

```json
{
  "name": "Page Name",
  "frame": {
    "width": 375,
    "height": 812,
    "minHeight": 812,
    "layoutMode": "VERTICAL",
    "primaryAxisSizingMode": "AUTO",
    "counterAxisSizingMode": "FIXED",
    "primaryAxisAlignItems": "MIN",
    "counterAxisAlignItems": "MIN",
    "itemSpacing": 0,
    "fills": [{ "type": "SOLID", "color": "#FFFFFF", "opacity": 1 }],
    "clipsContent": false
  },
  "nodes": []
}
```

Supported node types include:

- `frame`
- `rectangle`
- `text`
- `button`
- `input`
- `instance`

For component instances, use:

```json
{
  "type": "instance",
  "use": "PorscheCNV3/Text List",
  "name": "配置项-外观",
  "width": 375,
  "height": 56,
  "overrides": {
    "$texts": ["外观颜色", "GT 银金属漆"],
    "列表名称": "外观颜色",
    "内容": "GT 银金属漆"
  }
}
```

`overrides.$texts` is useful when internal text layer names are unknown.

## Embedding Command

After writing `generated/agent-layout.json`, run:

```bash
npm run agent:embed
node --check figma-plugin-yc-20260616/code.js
```

For a different JSON file:

```bash
npm run agent:embed:file -- generated/my-layout.json
```

## Final Response To Designer

After embedding succeeds, reply simply:

- The design has been generated and embedded into PDCN UX Helper.
- In Figma, open **PDCN UX Helper**.
- Go to **设计稿生成**.
- Click **渲染画布**.

Mention any known limitations, for example if a component was replaced with native editable text because the library component could not be imported or overridden reliably.
