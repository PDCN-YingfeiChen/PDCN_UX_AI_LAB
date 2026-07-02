# PDCN UX Helper

PDCN UX Helper 现在采用 MCP-first 画图流程：AI Agent 优先生成轻量页面 brief，并把它打包成可由 Figma MCP 执行的渲染脚本；真正画布写入由支持写入的 Figma MCP 完成。

本仓库会用 `scripts/patch-figma-ui-mcp.mjs` 给 `figma-ui-mcp` 注入 PDCN 专用的 `renderPdcnScreen` 和 `renderPdcnLayout` 操作。这些操作在 Figma bridge 插件侧执行，因此可以调用 `figma.importComponentByKeyAsync()` / `figma.importComponentSetByKeyAsync()`，真正使用 `component-keys.json` 和 `keys/PorscheCNV3.json` 里的已发布组件 key。

Figma 插件只保留组件 key 提取能力，不再承担页面渲染入口。

## 工作流概览

```text
Designer requirement
  -> Copilot / Cursor Agent
  -> generated/agent-brief.json
  -> npm run agent:screen-script
  -> generated/figma-mcp-render.js
  -> figma-ui-mcp figma_write calls renderPdcnScreen in Figma
  -> editable Figma canvas
```

## 前提条件

- VS Code 或 Cursor Agent 能读取本仓库并运行本地命令。
- 已连接支持写入的 Figma MCP。本仓库已安装并配置 patched `figma-ui-mcp`，它提供 `figma_write`、`figma_read`、`figma_status` 等工具。
- 当前 Figma 文件已启用需要的 Porsche CN 组件库。

只读 Figma MCP 只能读取上下文、截图、变量或 metadata，不能创建画布节点。

## 写入型 MCP 安装与连接

本仓库已经安装 `figma-ui-mcp@2.5.26`，并在 `.vscode/mcp.json` 中配置了 `figma-write` server。`figma-write` 通过 `scripts/start-figma-mcp.mjs` 启动；它会先静默运行 PDCN patch，再启动 `figma-ui-mcp`，避免重装依赖后忘记注入 `renderPdcnScreen` / `renderPdcnLayout`。

`npm install` 后会自动运行 `npm run mcp:patch`，把 PDCN key 渲染能力和 screen templates 写入本地 `figma-ui-mcp`。如果你手动删除或重装了 `node_modules`，也可以重新运行：

```bash
npm run mcp:patch
```

首次使用时需要做一次 Figma bridge 插件连接：

1. 运行下面命令查看插件路径：

  ```bash
  npm run mcp:figma:version
  ```

2. 打开 Figma Desktop。Figma 网页版不能访问 localhost bridge。
3. 进入 **Plugins -> Development -> Import plugin from manifest...**。
4. 选择命令输出路径下的 `plugin/manifest.json`，当前路径通常是：

  ```text
  node_modules/figma-ui-mcp/plugin/manifest.json
  ```

5. 在 Figma 中运行 **Plugins -> Development -> Figma UI MCP Bridge**。
6. 重启 VS Code，让 `.vscode/mcp.json` 里的新 MCP server 生效。
7. 在 Agent 中先调用 `figma_status` 确认插件已连接，再用 `figma_write` 执行 `generated/figma-mcp-render.js`。

如果 `figma_status` 显示 plugin not connected，Agent 可以先尝试运行 `npm run mcp:bridge:run`。这个脚本会在 macOS 上尝试打开 Figma 并运行 **Figma UI MCP Bridge**；如果 macOS 没有给 VS Code/Terminal 辅助功能权限，或 bridge plugin 尚未导入，才需要一次性手动运行 **Plugins -> Development -> Figma UI MCP Bridge**。

## Agent 生成页面

让 Agent 阅读 `AGENTS.md`，然后提出页面需求即可。推荐提示词：

```text
请阅读本仓库的 AGENTS.md，并通过写入型 Figma MCP 生成一个 Figma 页面。

我的设计需求是：
[在这里写页面需求，例如：保时捷易手车详情页，移动端 375 宽，使用 PorscheCNV3 组件库，包含状态栏、顶部导航、车辆图片、车型名称、认证标签、价格、关键参数、车辆配置、经销商信息、质保 banner 和底部预约按钮。]

请你：
1. 只在缺少关键信息时问简短问题；
2. 优先生成轻量页面 brief；
3. 保存到 generated/agent-brief.json；
4. 运行 npm run agent:screen-script；
5. 运行 npm run validate；
6. 调用 figma_status 确认 Figma bridge 已连接；
7. 通过 figma_write 执行 generated/figma-mcp-render.js；
8. 完成后告诉我设计稿已生成在 Figma 中。
不要让我手动写 JSON，不要让我复制粘贴 JSON，也不要让我运行终端命令。
```

已沉淀为低 token 模板的页面类型优先走 `generated/agent-brief.json`：

- `new-car-detail`：新车详情页，包含黑色主视觉视频区、车型价格、金融入口、参数宫格、个性化配置、官方权益和底部 CTA。
- `used-car-detail`：易手车详情页，继承详情页结构并替换为认证、里程、经销商和预约看车信息。
- `vehicle-recommendation`：推荐车辆页，包含需求摘要、匹配标签、车辆卡片和预约 CTA。
- `finance-calculator`：金融计算器。

这些模板继承最新版 PDCN UX Helper 的质量策略：组件优先、移动端 375 宽、Auto Layout 自适应高度、克制的保时捷详情页层级、PDCN token-like 色彩、业务结构固定、底部操作栏统一。

质量规则已经下沉到模板和渲染器：

- 英文车型名、价格、性能参数等优先使用 `Porsche Next`。如果 Figma 环境中的 style 名称不同，渲染器会依次尝试 `Semibold`、`SemiBold`、`Semi Bold`、`Bold`、`Regular` 等别名，最后才 fallback。
- 图标优先使用 `keys/PorscheIcons.json` 中的发布组件 key，通过 `Icon/...` 或 `PorscheIcons/...` 引用，例如 `Icon/Extra/play-filled`、`Icon/card`、`Icon/head-right`、`Icon/success-filled`。
- 文本 glyph 图标只作为组件导入失败时的 fallback，不作为正常设计输出。
- `fills: []` 会被保留为透明图层，避免 Figma 默认白底污染深色 section。
- 新车/易手车/推荐车辆等已支持的页面类型不要临时手搓 JS，优先走 screen template brief。

## Agent 命令

生成低 token MCP 渲染脚本：

```bash
npm run agent:screen-script
```

指定其他 brief 文件：

```bash
npm run agent:screen-script:file -- generated/my-brief.json
```



1. 打开 Figma 桌面版。
2. 进入 **Plugins -> Development -> Import plugin from manifest...**。
3. 选择本仓库里的 `figma-plugin-yc-20260616/manifest.json`。
4. 安装完成后运行 **Plugins -> Development -> PDCN UX Helper**。
插件只用于组件提取：

- 读取选中组件或实例的 key
- 扫描当前文件里的全部组件 key

## 读取选中组件 key

1. 在 Figma 画布上选中一个或多个组件/组件实例。
2. 打开插件 **PDCN UX Helper**。
3. 点击 **读取选中组件 key**。
4. 下方文本框会显示 key 信息。

## 扫描当前文件全部组件

1. 打开组件库源文件，或包含本地组件的 Figma 文件。
2. 打开插件 **PDCN UX Helper**。
3. 点击 **扫描当前文件全部组件**。
4. 下方文本框会显示全部组件 key。

## 后续修改页面

继续告诉 Agent 要改哪里即可，例如：

```text
把底部按钮改成“预约看车”。
```

```text
在价格下面增加“官方认证 / 2年原厂质保”两个标签。
```

```text
把经销商模块移到车辆配置上方。
```

Agent 会更新 `generated/agent-brief.json` 或 `generated/agent-layout.json`，重新生成 `generated/figma-mcp-render.js`，再通过写入型 Figma MCP 执行新的画布生成脚本。

建议连接 Figma MCP 并选择已有设计稿让 Agent 读取参考，这样生成效果会更接近当前设计系统和业务页面。

## 更新日志

### 2026-06-17 @Yingfei Chen

- 配置并验证 VS Code Figma MCP Server，可读取当前 Figma 文件、页面和选中画板信息。
- 优化 AI Agent 生成设计稿流程，支持根据当前 Figma 页面参考生成新页面，并通过 PDCN UX Helper 渲染到画布。
- 增强插件渲染能力：支持中英文混排字体分段，中文使用 PingFang SC，英文、数字和价格使用 Porsche Next。
- 修复 Figma 插件运行环境不支持可选链语法导致的 `Unexpected token .` 问题。
- 增强组件库实例渲染：优先使用 PorscheCNV3 组件，支持文本覆盖、实例属性设置、组件本地优先匹配和失败兜底。
- 新增 Porsche 图标库 key 注入能力，支持 `Icon/...` 命名空间调用组件库图标。
- 优化 Toolbar 渲染：底部操作栏使用完整 `PorscheCNV3/Tool Bar` 组件实例，并支持自动选择带 action icon 的变体。
- 生成保时捷金融计算器移动端页面，包含金融 banner、方案 Tab、月供 chips、计算结果、费用明细和底部预约咨询 Toolbar。
- 修复金融计算器页面中多个模块 Auto Layout 高度不自适应的问题，避免关键指标卡片和费用明细模块相互遮挡。

### 2026-06-16 @Yingfei Chen

- 初始化 PDCN UX Helper Figma 插件项目，包含插件 manifest、渲染代码、UI 页面、示例页面和基础脚本。
- 建立 AI Agent 设计稿生成工作流：Agent 生成 JSON、保存到 `generated/agent-layout.json`、运行嵌入命令、设计师在 Figma 插件中点击渲染。
- 新增 `AGENTS.md`、GitHub Copilot instructions 和 Cursor rules，统一不同 Agent 环境的使用方式。
- 编写 README，面向设计师说明 Clone 仓库、导入 Figma 插件、提交页面需求和渲染画布的完整流程。
- 添加 PorscheCNV3 组件 key 配置，支持状态栏、Header、Tag、Divider、Text List、Crest、Tool Bar、Home Indicator 等组件调用。
- 增加登录页示例和页面生成脚本，为后续页面模板和自动化生成打基础。

## 常见问题

### 为什么没有直接生成到 Figma？

请检查当前 Agent 是否连接了支持写入的 Figma MCP。只读 MCP 无法执行 `figma.createFrame()`、`figma.importComponentByKeyAsync()` 这类画布写入 API。

本仓库使用 patched `figma-ui-mcp`。如果提示 `figma.renderPdcnLayout is not a function`，先运行 `npm run mcp:patch`，然后重启 VS Code MCP server，并在 Figma 里重新运行 **Figma UI MCP Bridge** 插件。

### 插件里为什么没有“渲染画布”？

画图能力已经迁移到 MCP 流程。插件只保留组件 key 提取，避免设计师需要手动点击插件渲染。

### 为什么组件没有正确显示？

请先检查当前 Figma 文件是否启用了对应组件库：打开左侧 **Assets** 面板，点击组件库图标，确认需要的组件库已经勾选启用。

### 为什么英文没有显示 Porsche Next？

请先确认当前 Figma 文件可访问 Porsche 字体。渲染器会优先加载 `Porsche Next`，并尝试常见 style alias；如果当前环境没有该字体，才会 fallback 到默认字体。模板里的英文车型名、价格和性能参数都已经声明为 `Porsche Next`。

### 为什么图标变成了文字？

正常情况下模板会从 `keys/PorscheIcons.json` 导入真实 icon instance。只有图标组件 key 不可访问、库未启用或导入失败时，才会显示文字 fallback。常用图标包括 `Icon/Extra/play-filled`、`Icon/card`、`Icon/head-right`、`Icon/success-filled`、`Icon/heart` 和 `Icon/chat`。

### 为什么提示找不到组件？

通常是组件 key 不是已发布组件库的 key，或者当前文件没有启用对应组件库。可以用 PDCN UX Helper 插件重新读取正确 key。

## Legacy

`npm run agent:embed` 现在是 `npm run agent:render-script` 的兼容别名，不再把 JSON 注入插件。
