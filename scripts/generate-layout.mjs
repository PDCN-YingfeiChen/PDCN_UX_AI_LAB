import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const preset = readArgValue(args, "--preset") || "login";
const outPath = readArgValue(args, "--out") || path.join("generated", "figma-login-layout.json");
const pluginCodePath = path.join("figma-plugin-yc-20260616", "code.js");

const payload = buildPreset(preset);
await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify(payload, null, 2), "utf8");

console.log(`Wrote layout JSON to ${outPath}`);

const keyDictionary = await loadKeyDictionary();
await injectIntoPlugin(payload, pluginCodePath);
await injectKeysIntoPlugin(keyDictionary, pluginCodePath);

async function loadKeyDictionary() {
  const merged = {};
  let sources = 0;

  // 1) Backward-compatible single file at project root.
  const rootDict = await readJsonSafe("component-keys.json");
  if (rootDict) {
    mergeInto(merged, rootDict, null);
    sources += 1;
    console.log(
      `Loaded ${Object.keys(rootDict).length} key(s) from component-keys.json`
    );
  }

  // 2) Multi-library support: every *.json under keys/ becomes one library.
  //    The file name (without extension) is used as a namespace prefix so
  //    components from different libraries never collide.
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
    console.log(
      `Loaded ${Object.keys(dict).length} key(s) from ${filePath} (namespace "${namespace}")`
    );
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
    // Always register the plain name (last one wins on collisions).
    target[name] = key;
    // Also register a namespaced alias so you can disambiguate duplicates.
    if (namespace) {
      target[`${namespace}/${name}`] = key;
    }
  }
}

async function injectKeysIntoPlugin(dict, codePath) {
  let source;
  try {
    source = await readFile(codePath, "utf8");
  } catch {
    console.warn(`Skip keys embed: cannot read ${codePath}`);
    return;
  }

  const startMarker = "/* KEYS_START */";
  const endMarker = "/* KEYS_END */";
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.warn("Skip keys embed: key markers not found in plugin code.js");
    return;
  }

  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  const embedded = ` ${JSON.stringify(dict)} `;
  const next = `${before}${embedded}${after}`;

  await writeFile(codePath, next, "utf8");
  console.log(`Embedded ${Object.keys(dict).length} key(s) into ${codePath}`);
}

async function injectIntoPlugin(data, codePath) {
  let source;
  try {
    source = await readFile(codePath, "utf8");
  } catch {
    console.warn(`Skip embed: cannot read ${codePath}`);
    return;
  }

  const startMarker = "/* PAYLOAD_START */";
  const endMarker = "/* PAYLOAD_END */";
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.warn("Skip embed: payload markers not found in plugin code.js");
    return;
  }

  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  const embedded = ` ${JSON.stringify(data)} `;
  const next = `${before}${embedded}${after}`;

  await writeFile(codePath, next, "utf8");
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

function buildPreset(name) {
  if (name === "login") {
    return loginPreset();
  }

  if (name === "library-demo") {
    return libraryDemoPreset();
  }

  if (name === "used-car-detail") {
    return usedCarDetailPreset();
  }

  throw new Error(`Unknown preset: ${name}`);
}

function loginPreset() {
  return {
    name: "Login Page",
    frame: {
      width: 1440,
      height: 1024,
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "CENTER",
      counterAxisAlignItems: "CENTER",
      fills: [{ type: "SOLID", color: "#ECFEFF", opacity: 1 }]
    },
    nodes: [
      {
        type: "frame",
        name: "Card",
        width: 420,
        height: 448,
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        padding: 28,
        itemSpacing: 14,
        cornerRadius: 20,
        fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
        stroke: { color: "#D1D5DB", weight: 1 },
        nodes: [
          {
            type: "text",
            name: "Eyebrow",
            characters: "AI Portal",
            fontFamily: "Roboto",
            fontStyle: "Medium",
            fontSize: 12,
            letterSpacing: 0.4,
            fills: [{ type: "SOLID", color: "#0F766E", opacity: 1 }]
          },
          {
            type: "text",
            name: "Title",
            characters: "Sign in to your workspace",
            fontFamily: "Roboto",
            fontStyle: "Bold",
            fontSize: 28,
            lineHeight: 34,
            fills: [{ type: "SOLID", color: "#111827", opacity: 1 }],
            maxWidth: 360
          },
          {
            type: "text",
            name: "Desc",
            characters: "Use your corporate email to continue.",
            fontFamily: "Roboto",
            fontStyle: "Regular",
            fontSize: 14,
            fills: [{ type: "SOLID", color: "#6B7280", opacity: 1 }],
            maxWidth: 360
          },
          {
            type: "input",
            name: "Email",
            label: "Email",
            placeholder: "name@company.com",
            width: 360
          },
          {
            type: "input",
            name: "Password",
            label: "Password",
            placeholder: "********",
            width: 360
          },
          {
            type: "button",
            name: "SignIn",
            label: "Sign in",
            width: 360,
            height: 44,
            fills: [{ type: "SOLID", color: "#0F172A", opacity: 1 }]
          },
          {
            type: "button",
            name: "Google",
            label: "Continue with Google",
            width: 360,
            height: 44,
            fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
            textFills: [{ type: "SOLID", color: "#111827", opacity: 1 }],
            stroke: { color: "#D1D5DB", weight: 1 }
          }
        ]
      }
    ]
  };
}

function libraryDemoPreset() {
  return {
    name: "Library Demo",
    frame: {
      width: 1440,
      height: 1024,
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "CENTER",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 24,
      paddingTop: 80,
      fills: [{ type: "SOLID", color: "#F4F4F5", opacity: 1 }]
    },
    nodes: [
      {
        type: "text",
        name: "Heading",
        characters: "Team Library Components",
        fontFamily: "Roboto",
        fontStyle: "Bold",
        fontSize: 28,
        fills: [{ type: "SOLID", color: "#18181B", opacity: 1 }]
      },
      {
        type: "frame",
        name: "Stack",
        width: 420,
        height: 600,
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        itemSpacing: 16,
        fills: [{ type: "SOLID", color: "#F4F4F5", opacity: 1 }],
        nodes: [
          { type: "instance", use: "status_bar", name: "Status bar" },
          { type: "instance", use: "Homescreen_hero", name: "Hero" },
          { type: "instance", use: "quick_actions", name: "Quick actions" },
          { type: "instance", use: "Bottom nav", name: "Bottom nav" }
        ]
      }
    ]
  };
}

function usedCarDetailPreset() {
  const W = 375;
  const fullWidth = W;

  return {
    name: "Porsche 易手车 - 详情页",
    frame: {
      width: W,
      height: 812,
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      itemSpacing: 0,
      fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
      clipsContent: true
    },
    nodes: [
      // 1. 状态栏 + 顶部导航
      { type: "instance", use: "PorscheCNV3/Status bar", name: "Status bar", width: fullWidth, height: 44 },
      {
        type: "instance",
        use: "PorscheCNV3/Header",
        name: "Header",
        width: fullWidth,
        height: 56,
        overrides: { Title: "易手车详情", title: "易手车详情" }
      },

      // 2. 车辆大图区域
      {
        type: "frame",
        name: "车辆大图",
        width: fullWidth,
        height: 220,
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MAX",
        counterAxisAlignItems: "MIN",
        paddingTop: 136,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        itemSpacing: 8,
        clipsContent: true,
        fills: [{ type: "SOLID", color: "#151515", opacity: 1 }],
        nodes: [
          {
            type: "text",
            name: "车辆图说明",
            characters: "911 Carrera S · 认证易手车",
            fontFamily: "Roboto",
            fontStyle: "Medium",
            fontSize: 13,
            fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
            maxWidth: W - 32
          },
          {
            type: "text",
            name: "车辆图副标题",
            characters: "GT 银金属漆 · 上海浦东保时捷中心",
            fontFamily: "Roboto",
            fontStyle: "Regular",
            fontSize: 11,
            fills: [{ type: "SOLID", color: "#D1D5DB", opacity: 1 }],
            maxWidth: W - 32
          }
        ]
      },

      // 3. 车型名称 + 价格 + 4. 认证/质保标签
      {
        type: "frame",
        name: "标题区",
        width: W,
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "MIN",
        itemSpacing: 8,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
        nodes: [
          {
            type: "text",
            name: "车型名称",
            characters: "Porsche 911 Carrera S",
            fontFamily: "Roboto",
            fontStyle: "Bold",
            fontSize: 22,
            fills: [{ type: "SOLID", color: "#0A0A0A", opacity: 1 }],
            maxWidth: W - 32
          },
          {
            type: "frame",
            name: "标签行",
            width: W - 32,
            layoutMode: "HORIZONTAL",
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            primaryAxisAlignItems: "MIN",
            counterAxisAlignItems: "CENTER",
            itemSpacing: 8,
            fills: [],
            nodes: [
              { type: "instance", use: "PorscheCNV3/Tag-VIP", name: "官方认证", width: 72, height: 24 },
              {
                type: "instance",
                use: "PorscheCNV3/Tag",
                name: "质保标签",
                width: 96,
                height: 24,
                overrides: { Label: "2年原厂质保", label: "2年原厂质保" }
              }
            ]
          },
          {
            type: "text",
            name: "价格",
            characters: "¥ 1,288,000",
            fontFamily: "Roboto",
            fontStyle: "Bold",
            fontSize: 24,
            fills: [{ type: "SOLID", color: "#C8102E", opacity: 1 }],
            maxWidth: W - 32
          }
        ]
      },

      { type: "instance", use: "PorscheCNV3/Divider", name: "分割线1", width: fullWidth, height: 1 },

      // 5. 关键参数 (里程/年份/排量)
      {
        type: "frame",
        name: "关键参数",
        width: W,
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "SPACE_BETWEEN",
        counterAxisAlignItems: "CENTER",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
        nodes: [
          paramItem("里程", "1.2 万公里"),
          paramItem("年份", "2022 款"),
          paramItem("排量", "3.0T")
        ]
      },

      { type: "instance", use: "PorscheCNV3/Divider", name: "分割线2", width: fullWidth, height: 1 },

      // 6. 车辆配置清单
      {
        type: "frame",
        name: "配置标题",
        width: W,
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "MIN",
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
        nodes: [
          {
            type: "text",
            name: "配置标题文字",
            characters: "车辆配置",
            fontFamily: "Roboto",
            fontStyle: "Bold",
            fontSize: 18,
            fills: [{ type: "SOLID", color: "#0A0A0A", opacity: 1 }]
          }
        ]
      },
      { type: "instance", use: "PorscheCNV3/Text List", name: "配置项-外观", width: fullWidth, height: 56, overrides: { Title: "外观颜色", Content: "GT 银金属漆" } },
      { type: "instance", use: "PorscheCNV3/Text List", name: "配置项-内饰", width: fullWidth, height: 56, overrides: { Title: "内饰", Content: "黑色真皮" } },
      { type: "instance", use: "PorscheCNV3/Text List", name: "配置项-驱动", width: fullWidth, height: 56, overrides: { Title: "驱动方式", Content: "后轮驱动" } },
      { type: "instance", use: "PorscheCNV3/Text List", name: "配置项-变速", width: fullWidth, height: 56, overrides: { Title: "变速箱", Content: "8速 PDK" } },

      { type: "instance", use: "PorscheCNV3/Divider", name: "分割线3", width: fullWidth, height: 1 },

      // 7. 经销商信息卡
      {
        type: "frame",
        name: "经销商卡",
        width: W,
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        itemSpacing: 12,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        fills: [{ type: "SOLID", color: "#F7F7F7", opacity: 1 }],
        nodes: [
          { type: "instance", use: "PorscheCNV3/Crest", name: "经销商标识", width: 40, height: 48 },
          {
            type: "frame",
            name: "经销商文本",
            width: W - 32 - 40 - 12,
            layoutMode: "VERTICAL",
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            primaryAxisAlignItems: "MIN",
            counterAxisAlignItems: "MIN",
            itemSpacing: 4,
            fills: [],
            nodes: [
              {
                type: "text",
                name: "经销商名称",
                characters: "保时捷中心 · 上海浦东",
                fontFamily: "Roboto",
                fontStyle: "Medium",
                fontSize: 15,
                fills: [{ type: "SOLID", color: "#0A0A0A", opacity: 1 }],
                maxWidth: W - 84
              },
              {
                type: "text",
                name: "经销商地址",
                characters: "上海市浦东新区世纪大道 100 号",
                fontFamily: "Roboto",
                fontStyle: "Regular",
                fontSize: 13,
                fills: [{ type: "SOLID", color: "#6B6B6B", opacity: 1 }],
                maxWidth: W - 84
              }
            ]
          }
        ]
      },

      // 占位留白，避免内容贴住底部操作栏
      {
        type: "rectangle",
        name: "底部留白",
        width: W,
        height: 24,
        fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }]
      },

      // 8. 底部操作栏 (咨询 + 预约/下单) + Home Indicator
      {
        type: "instance",
        use: "PorscheCNV3/Tool Bar",
        name: "底部操作栏",
        width: fullWidth,
        height: 64,
        overrides: { Button: "预约看车", "Tool Bar / Button": "预约看车" }
      },
      { type: "instance", use: "PorscheCNV3/Home Indicator", name: "Home Indicator", width: fullWidth, height: 34 }
    ]
  };
}

function paramItem(label, value) {
  return {
    type: "frame",
    name: `参数-${label}`,
    layoutMode: "VERTICAL",
    primaryAxisSizingMode: "AUTO",
    counterAxisSizingMode: "AUTO",
    primaryAxisAlignItems: "MIN",
    counterAxisAlignItems: "CENTER",
    itemSpacing: 4,
    fills: [],
    nodes: [
      {
        type: "text",
        name: `${label}-值`,
        characters: value,
        fontFamily: "Roboto",
        fontStyle: "Bold",
        fontSize: 16,
        fills: [{ type: "SOLID", color: "#0A0A0A", opacity: 1 }],
        textAlignHorizontal: "CENTER"
      },
      {
        type: "text",
        name: `${label}-名`,
        characters: label,
        fontFamily: "Roboto",
        fontStyle: "Regular",
        fontSize: 12,
        fills: [{ type: "SOLID", color: "#6B6B6B", opacity: 1 }],
        textAlignHorizontal: "CENTER"
      }
    ]
  };
}
