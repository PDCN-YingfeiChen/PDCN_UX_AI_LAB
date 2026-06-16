# PDCN UX Helper

PDCN UX Helper 是一个 Figma 插件，用于把已经生成好的页面 JSON 渲染成 Figma 设计稿，也可以帮助设计师提取组件库 key。

这个工具主要面向 PDCN UX 团队设计师使用，不需要代码基础。

## 插件能做什么

- 一键在 Figma 当前文件生成设计稿
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

插件会把当前内置的页面 JSON 渲染成 Figma 画布。

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

普通设计师不需要自己改代码。请把页面需求发给维护者，由维护者在 VS Code 中更新页面 JSON 后重新上传到 GitHub。

### 为什么组件没有正确显示？

请先检查当前 Figma 文件是否启用了对应组件库：

1. 打开左侧 **Assets** 面板。
2. 点击组件库图标。
3. 确认需要的组件库已经勾选启用。

### 为什么提示找不到组件？

通常是组件 key 不是已发布组件库的 key，或者当前文件没有启用对应组件库。可以用 **组件提取** tab 重新读取正确 key。

## 维护者使用

如果需要更新内置页面，请在项目目录运行：

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
