# PDCN UX Helper

PDCN UX Helper 是一个 Figma 插件，用于接收 AI Agent 生成的页面 JSON，并在 Figma 中渲染成可编辑设计稿；也可以帮助设计师提取组件库 key。

这个工具主要面向 PDCN UX 团队设计师使用，不需要代码基础。

## 插件能做什么

- 接收 AI Agent 生成的页面 JSON，并在 Figma 当前文件生成设计稿
- 使用已启用的 Figma 组件库（当前仅支持V3 DS CN component组件库）渲染页面组件
- 读取选中组件或实例的 key
- 扫描当前文件里的全部组件 key

## 文件位置

插件文件在：

```text
figma-plugin-yc-20260616/manifest.json
```

导入 Figma 插件时请选择这个 `manifest.json` 文件。

## 使用方式 1：VS Code 直接 Clone 仓库后生成设计稿

适合已经安装 VS Code，并且可以登录 GitHub Copilot 的设计师。

### 第一步：用 VS Code 打开仓库

1. 打开 VS Code。
2. 按 **Command + Shift + P**。
3. 输入并选择 **Git: Clone**。
4. 粘贴仓库地址：`https://github.com/PDCN-YingfeiChen/PDCN_UX_AI_LAB`。
5. 选择一个本地文件夹保存。
6. 克隆完成后，VS Code 会提示是否打开仓库，选择 **Open**。

### 第二步：安装 Figma 插件

1. 打开 Figma 桌面版。
2. 进入 **Plugins -> Development -> Import plugin from manifest...**。
3. 选择刚才 VS Code 下载下来的仓库文件夹。
4. 找到并选择 `figma-plugin-yc-20260616/manifest.json`。
5. 安装完成后，在 Figma 菜单里运行 **Plugins -> Development -> PDCN UX Helper**。

### 第三步：让 Copilot Agent 生成页面

1. 回到 VS Code。
2. 打开 Copilot Chat。
3. 确认 Copilot Chat 使用的是 **Agent** 模式。
4. 对 Copilot 发送下面这段话，并把方括号里的内容替换成你的页面需求：

```text
请阅读本仓库的 AGENTS.md，并使用 PDCN UX Helper 生成一个 Figma 页面。

我的设计需求是：
[在这里写你的页面需求，例如：保时捷易手车详情页，移动端 375 宽，使用 PorscheCNV3 组件库，包含状态栏、顶部导航、车辆图片、车型名称、认证标签、价格、关键参数、车辆配置、经销商信息、质保 banner 和底部预约按钮。]

请你：
1. 先用简短问题确认页面信息；
2. 生成完整页面 JSON；
3. 保存到 generated/agent-layout.json；
4. 运行 npm run agent:embed；
5. 运行 node --check figma-plugin-yc-20260616/code.js；
6. 完成后告诉我回到 Figma 插件点击「设计稿生成 -> 渲染画布」。
不要让我手动写 JSON，也不要让我复制粘贴 JSON。
```

### 第四步：在 Figma 里渲染

1. 回到 Figma。
2. 打开插件 **Plugins -> Development -> PDCN UX Helper**。
3. 进入 **设计稿生成**。
4. 点击 **渲染画布**。

页面会生成在当前 Figma 画布上。

## 使用方式 2：下载 ZIP 后和 Copilot Agent 合作

适合不熟悉 Git Clone，希望先从 GitHub 网页下载文件的设计师。

### 第一步：下载仓库 ZIP

1. 打开仓库链接：`https://github.com/PDCN-YingfeiChen/PDCN_UX_AI_LAB`。
2. 点击绿色按钮 **Code**。
3. 选择 **Download ZIP**。
4. 下载完成后双击解压。
5. 得到一个文件夹，名字通常类似 `PDCN_UX_AI_LAB-main`。

### 第二步：用 VS Code 打开解压后的文件夹

1. 打开 VS Code。
2. 选择 **File -> Open Folder...**。
3. 选择刚才解压出来的 `PDCN_UX_AI_LAB-main` 文件夹。
4. 打开后，确认 VS Code 左侧能看到 `AGENTS.md`、`README.md`、`figma-plugin-yc-20260616`、`generated`、`scripts`、`package.json`。

### 第三步：安装 Figma 插件

1. 打开 Figma 桌面版。
2. 进入 **Plugins -> Development -> Import plugin from manifest...**。
3. 选择解压后的仓库文件夹。
4. 找到并选择 `figma-plugin-yc-20260616/manifest.json`。
5. 安装完成后，在 Figma 菜单里运行 **Plugins -> Development -> PDCN UX Helper**。

### 第四步：让 Copilot Agent 生成页面

1. 回到 VS Code。
2. 打开 Copilot Chat。
3. 确认 Copilot Chat 使用的是 **Agent** 模式。
4. 对 Copilot 发送下面这段话，并把方括号里的内容替换成你的页面需求：

```text
请阅读本仓库的 AGENTS.md，并使用 PDCN UX Helper 生成一个 Figma 页面。

我的设计需求是：
[在这里写你的页面需求，例如：保时捷易手车详情页，移动端 375 宽，使用 PorscheCNV3 组件库，包含状态栏、顶部导航、车辆图片、车型名称、认证标签、价格、关键参数、车辆配置、经销商信息、质保 banner 和底部预约按钮。]

请你：
1. 先用简短问题确认页面信息；
2. 生成完整页面 JSON；
3. 保存到 generated/agent-layout.json；
4. 运行 npm run agent:embed；
5. 运行 node --check figma-plugin-yc-20260616/code.js；
6. 完成后告诉我回到 Figma 插件点击「设计稿生成 -> 渲染画布」。
不要让我手动写 JSON，也不要让我复制粘贴 JSON。
```

### 第五步：在 Figma 里渲染

1. 回到 Figma。
2. 打开插件 **Plugins -> Development -> PDCN UX Helper**。
3. 进入 **设计稿生成**。
4. 点击 **渲染画布**。

页面会生成在当前 Figma 画布上。

## 后续修改页面

如果想改页面，不需要重新安装插件。直接回到 VS Code 的 Copilot Chat，说：

```text
请把刚才的页面改成：[写你的修改需求]。修改完成后重新嵌入插件。
```

Copilot 完成后，再回到 Figma 插件点击 **设计稿生成 -> 渲染画布**。

## AI Agent 使用说明

本仓库已经内置 Agent 工作流说明：

- `AGENTS.md`：通用 AI Agent 工作流
- `.github/copilot-instructions.md`：VS Code / GitHub Copilot 使用
- `.cursor/rules/pdcn-ux-helper.mdc`：Cursor Agent 使用

设计师不需要自己写 JSON，也不需要复制粘贴代码。Copilot Agent 会先引导设计师说出页面需求，再生成 JSON，并把 JSON 嵌入 PDCN UX Helper 插件。

这里的 AI Agent 指的是**能读取本地项目文件并运行项目命令的 Agent 环境**，例如 VS Code Copilot Agent、Cursor Agent 或团队内部配置好的自动化 Agent。普通 GPT / 豆包 / Deepseek / 网页 Copilot 聊天通常不能直接连接本地 Figma 插件。

Agent 会使用这个命令把生成好的 JSON 嵌入插件：

```bash
npm run agent:embed
```

设计师不需要运行这个命令；这是给 AI Agent 自动执行的。

**建议：连接Figma MCP，选择已有设计稿让AI Agent读取参考，生成效果更好**

## 设计师怎么提需求

直接用自然语言描述页面即可。建议一次说明这几类信息：

- 页面类型：详情页、列表页、表单页、确认页、成功页等
- 业务内容：车型、价格、经销商、预约信息、订单状态等
- 组件库要求：是否使用 CN Components，是否优先使用已有组件
- 设备尺寸：例如 iPhone 375 宽移动端页面
- 特殊要求：按钮文案、模块顺序、是否需要底部操作栏

示例：

```text
请用 PDCN UX Helper 生成一个保时捷易手车详情页，移动端 375 宽，使用 [V3 DS - App] CN Components 组件库。页面包含状态栏、顶部导航、车辆图片、车型名称、认证标签、价格、关键参数、车辆配置、经销商信息和底部预约按钮。
```

### 生成后的修改方式

如果第一次生成不够准确，不需要重新开始。继续告诉 AI Agent 要改哪里：

```text
把底部按钮改成“预约看车”。
```

```text
在价格下面增加“官方认证 / 2年原厂质保”两个标签。
```

```text
把经销商模块移到车辆配置上方。
```

AI Agent 会重新生成或调整 JSON，再发送给插件渲染新的画板。

## 设计师最终只需要做什么

1. 和 AI Agent 沟通页面需求。
2. 等 Agent 提示“已嵌入插件”。
3. 回到 Figma 插件 **PDCN UX Helper**。
4. 点击 **设计稿生成 -> 渲染画布**。

除此之外，不需要写 JSON、不需要复制粘贴、不需要运行命令。

## 使用方式 3：提取组件库 key

### 要求
- 拥有该组件库的figma 编辑权限
- 需要在组件库的源文件里打开插件提取
- 后续使用时，设计文件需启用该组件库

### 读取选中组件 key

1. 在 Figma 画布上选中一个或多个组件/组件实例。
2. 打开插件 **PDCN UX Helper**。
3. 进入 **组件提取** tab。
4. 点击 **读取选中组件 key**。
5. 下方文本框会显示 key 信息。

### 扫描当前文件全部组件

1. 打开组件库源文件，或包含本地组件的 Figma 文件。
2. 打开插件 **PDCN UX Helper**。
3. 进入 **组件提取** tab。
4. 点击 **扫描当前文件全部组件**。
5. 下方文本框会显示全部组件 key。

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

### 插件里没有生成我想要的新页面怎么办？

普通设计师不需要自己改代码，也不需要手写 JSON。请直接把页面需求告诉 AI Agent，让 AI Agent 生成新的页面 JSON 并传给插件渲染。

### 为什么组件没有正确显示？

请先检查当前 Figma 文件是否启用了对应组件库：

1. 打开左侧 **Assets** 面板。
2. 点击组件库图标。
3. 确认需要的组件库已经勾选启用。

### 为什么提示找不到组件？

通常是组件 key 不是已发布组件库的 key，或者当前文件没有启用对应组件库。可以用 **组件提取** tab 重新读取正确 key。

