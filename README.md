# PDCN UX Helper

PDCN UX Helper 是一个 Figma 插件，用于接收 AI Agent 生成的页面 JSON，并在 Figma 中渲染成可编辑设计稿；也可以帮助设计师提取组件库 key。

这个工具主要面向 PDCN UX 团队设计师使用，不需要代码基础。

## 插件能做什么

- 接收 AI Agent 生成的页面 JSON，并在 Figma 当前文件生成设计稿
- 使用已启用的 Figma 组件库渲染页面组件
- 读取选中组件或实例的 key
- 扫描当前文件里的全部组件 key

## 文件位置

插件文件在：

```text
figma-plugin-yc-20260616/manifest.json
```

导入 Figma 插件时请选择这个 `manifest.json` 文件。

## 没有 VS Code 怎么使用

不需要 VS Code 也可以使用插件。

1. 打开 GitHub 仓库页面。
2. 点击绿色的 **Code** 按钮。
3. 点击 **Download ZIP**。
4. 解压下载的 ZIP 文件。
5. 打开 Figma 桌面版。
6. 进入 **Plugins -> Development -> Import plugin from manifest...**。
7. 选择解压后文件夹里的 `figma-plugin-yc-20260616/manifest.json`。
8. 在 Figma 里运行插件 **PDCN UX Helper**。

导入一次后，之后可以直接从 Figma 的开发插件列表里打开。

## 使用方式 1：生成设计稿

1. 打开需要生成页面的 Figma 文件。
2. 确认相关组件库已启用，例如 `[V3 DS - App] CN Components`。
3. 打开插件 **PDCN UX Helper**。
4. 进入 **设计稿生成** tab。
5. 点击 **渲染画布**。

插件会把 AI Agent 传入或当前已准备好的页面 JSON 渲染成 Figma 画布。

## 推荐方式：连接 AI Agent 生成页面

设计师不需要自己写 JSON，也不需要复制粘贴代码。推荐让 AI Agent 直接生成页面 JSON，并发送给插件渲染。

### 连接前准备

1. 打开需要生成页面的 Figma 文件。
2. 确认相关组件库已启用，例如 `[V3 DS - App] CN Components`。
3. 运行插件 **PDCN UX Helper**。
4. 停留在 **设计稿生成** tab。
5. 打开团队配置好的 AI Agent 对话窗口。

只要 Figma 文件和插件保持打开，AI Agent 就可以把页面 JSON 发送给插件，由插件在当前 Figma 文件中生成设计稿。

### 设计师怎么提需求

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

### 如果没有 VS Code

没有 VS Code 也可以使用插件本身。设计师只需要安装并打开 Figma 插件；AI Agent 的连接环境由团队统一配置。日常使用时，设计师只需要在 AI Agent 对话里描述页面需求，并在 Figma 中查看生成结果。

## 使用方式 2：提取组件 key

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

## AI Agent / 维护者使用

推荐流程是让 AI Agent 直接根据设计需求生成 JSON，并发送给插件渲染。维护者主要负责三件事：

- 维护组件 key，例如更新 `keys/PorscheCNV3.json`
- 维护页面 JSON 的结构规则
- 在需要固定模板时，把常用页面预设保存到脚本里

如果需要更新插件内置的默认页面，可以在项目目录运行：

```bash
npm run draw:usedcar
```

常用命令：

```bash
npm run draw:usedcar   # 生成保时捷易手车详情页
npm run draw:library   # 生成组件库测试页面
npm run draw:login     # 生成登录页测试页面
```

运行后，页面 JSON 会自动嵌入插件代码。重新上传 GitHub 后，团队成员下载最新版即可使用。

对于日常页面生成，更建议通过 AI Agent 直接生成并传入 JSON，这样设计师不需要等待维护者每次重新发布插件。
