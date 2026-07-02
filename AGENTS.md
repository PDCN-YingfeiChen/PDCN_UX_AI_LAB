# PDCN UX Helper Agent Guide

Use this guide when an AI Agent is helping a designer generate Figma screens for PDCN.

## What This Repository Does

This repository stores the PDCN Figma layout JSON schema, Porsche CN component keys, and scripts that package a generated layout into a Figma-executable render script.

The drawing path is now MCP-first and key-compatible:

1. The Agent creates a small page brief when a matching screen template exists.
2. The Agent saves it to `generated/agent-brief.json`.
3. The Agent runs `npm run agent:screen-script`.
4. The Agent sends `generated/figma-mcp-render.js` to `figma_write` from the configured patched `figma-ui-mcp` server.
5. The script calls `figma.renderPdcnScreen(...)`; the Figma bridge plugin builds the full layout from local PDCN templates, imports published Porsche CN components by key, and creates editable canvas nodes.

Use the full JSON payload flow only when no screen template matches the requested page.

The PDCN UX Helper Figma plugin is only for component key extraction now. Designers should not use it to render pages.

## Important Boundary

A normal GPT web chat cannot directly control Figma. This workflow requires an Agent environment with:

- local repository file access,
- command execution,
- a write-enabled Figma MCP connection. This repo is configured with `figma-ui-mcp` as the `figma-write` MCP server and patches it with PDCN `renderPdcnScreen` / `renderPdcnLayout` operations.

Read-only Figma MCP tools can inspect files, screenshots, metadata, or variables, but they cannot draw pages. If `figma_status` reports that the bridge plugin is not connected, try `npm run mcp:bridge:run`. If that fails, stop after generating `generated/figma-mcp-render.js` and tell the user that **Figma UI MCP Bridge** must be run once in Figma Desktop.

Stock `figma-ui-mcp` can instantiate only local components by id/name. This repository runs `npm run mcp:patch` after install so the bridge can import published library components using keys from `component-keys.json` and `keys/PorscheCNV3.json`. If `figma.renderPdcnScreen is not a function` or `figma.renderPdcnLayout is not a function`, run `npm run mcp:patch`, restart the MCP server, and rerun the bridge plugin in Figma Desktop. The Agent may try `npm run mcp:bridge:run` first to avoid manual clicking.

## Designer-Facing Workflow

When a designer asks to create or modify a design:

1. Ask concise clarifying questions only for missing essentials.
2. Prefer a screen template brief when available; otherwise generate a complete Figma JSON payload.
3. Save brief payloads to `generated/agent-brief.json`; save full layouts to `generated/agent-layout.json`.
4. Run `npm run agent:screen-script` for brief payloads; run `npm run agent:render-script` for full layouts.
5. Validate with `npm run validate`.
6. Call `figma_status` to confirm the Figma bridge is connected.
7. Execute `generated/figma-mcp-render.js` through `figma_write`.
8. Tell the designer the design has been generated in Figma.

Do not ask the designer to copy/paste JSON.
Do not ask the designer to run terminal commands.
Do not ask the designer to open PDCN UX Helper to render the canvas. The only plugin the designer may need to run is **Figma UI MCP Bridge**, which keeps the MCP connection alive.
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
- Prefer high-quality screen templates for known PDCN page types instead of ad hoc JSON. Templates encode the latest UX Helper strategy: restrained Porsche detail-page hierarchy, V3 component-first chrome, token-like colors, stable business sections, and bottom CTA structure.
- Use Porsche Next for English/model/price/spec numerals when available; renderer should try common Porsche Next style aliases before falling back.
- Use icon instances from `keys/PorscheIcons.json` via `Icon/...` or `PorscheIcons/...` for play, arrows, finance/card, success/check, chat, favorite, and other pictograms. Text glyph icons are fallback only.
- If a component imports but its text cannot be overridden reliably, use a native editable frame/text fallback for that small section.
- Do not force Tag width/height; Tag components should stay hug-content unless the designer asks otherwise.
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

Use icon component references from `keys/PorscheIcons.json`:

- `Icon/Extra/play-filled`
- `Icon/card`
- `Icon/head-right`
- `Icon/success-filled`
- `Icon/heart`
- `Icon/chat`

Avoid direct use of subcomponents that fail import, especially:

- `PorscheCNV3/Text list / Title`

## Brief Payload Shape

Use this lower-token flow whenever the requested page matches a template.

```json
{
  "screen": "finance-calculator",
  "device": "mobile-375",
  "data": {
    "title": "金融计算器",
    "model": "Taycan 4 Cross Turismo",
    "price": "¥ 968,000",
    "primaryCta": "申请预审"
  }
}
```

Currently supported templates:

- `finance-calculator`
- `new-car-detail`
- `used-car-detail`
- `vehicle-recommendation`

Use `new-car-detail` for Porsche new vehicle detail pages. It follows the high-quality PDCN UX Helper structure: status/header, black hero video area, model and price block, finance entry, core spec grid, personalization/option section, official benefits, toolbar, and home indicator.

Use `used-car-detail` for Porsche approved pre-owned detail pages. It shares the detail-page structure but changes defaults to certification, mileage, dealer, vehicle condition, and appointment CTAs.

Use `vehicle-recommendation` for matching/recommendation flows. It includes needs summary, matching tags, vehicle cards, recommendation rationale, and bottom action CTAs.

## Full JSON Payload Shape

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

## MCP Render Command

For brief payloads, after writing `generated/agent-brief.json`, run:

```bash
npm run agent:screen-script
npm run validate
```

For full layouts, after writing `generated/agent-layout.json`, run:

```bash
npm run agent:render-script
npm run validate
```

For a different JSON file:

```bash
npm run agent:render-script:file -- generated/my-layout.json
```

Both commands write `generated/figma-mcp-render.js`. Execute the entire script with the write-enabled Figma MCP tool.

The generated brief script calls `figma.renderPdcnScreen({ screen, device, data })`. The full-layout script calls `figma.renderPdcnLayout({ layout })`. Do not replace either with raw `figma.importComponentByKeyAsync()` calls inside `figma_write`; those imports must run in the patched Figma bridge plugin context. The key dictionary and screen templates are embedded into the patched bridge by `npm run mcp:patch`.

## Legacy Plugin Render Command

`npm run agent:embed` still exists as a compatibility alias for `npm run agent:render-script`. It no longer embeds JSON into the plugin.

## Final Response To Designer

After MCP execution succeeds, reply simply:

- The design has been generated in Figma.
- Mention any known limitations, for example if a component was replaced with native editable text because the library component could not be imported or overridden reliably.

If no write-enabled Figma MCP is connected, say that `generated/figma-mcp-render.js` is ready but requires a `use_figma`-style MCP tool to execute in Figma.
