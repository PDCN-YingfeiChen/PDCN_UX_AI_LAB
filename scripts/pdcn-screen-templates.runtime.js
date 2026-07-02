// PDCN screen templates injected into the patched Figma MCP bridge.
// Expects the existing renderDocument runtime to consume returned layout objects.

function buildPdcnScreenLayout(params) {
  var screen = params && params.screen ? String(params.screen) : "";
  var device = params && params.device ? String(params.device) : "mobile-375";
  var data = params && params.data && typeof params.data === "object" ? params.data : {};

  if (screen === "finance-calculator") {
    return buildFinanceCalculatorScreen(data, device);
  }

  if (screen === "new-car-detail") {
    return buildNewCarDetailScreen(data, device);
  }

  if (screen === "used-car-detail") {
    return buildUsedCarDetailScreen(data, device);
  }

  if (screen === "vehicle-recommendation") {
    return buildVehicleRecommendationScreen(data, device);
  }

  throw new Error("Unsupported PDCN screen template: " + screen);
}

function mobileFrame(name, options) {
  var width = options && options.width ? options.width : 375;
  return {
    name: name,
    frame: {
      width: width,
      height: 812,
      minHeight: 812,
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      itemSpacing: 0,
      fills: [{ type: "SOLID", color: "#F5F6F7", opacity: 1 }],
      clipsContent: false,
    },
    nodes: [],
  };
}

function textNode(name, characters, options) {
  options = options || {};
  return {
    type: "text",
    name: name,
    characters: String(characters || ""),
    fontFamily: options.fontFamily || "PingFang SC",
    fontStyle: options.fontStyle || "Regular",
    fontSize: options.fontSize || 14,
    lineHeight: options.lineHeight || 20,
    fills: [{ type: "SOLID", color: options.color || "#111315", opacity: 1 }],
    maxWidth: options.maxWidth || 307,
  };
}

var PDCN = {
  page: "#FFFFFF",
  surface: "#FFFFFF",
  card: "#FFFFFF",
  muted: "#EEEFF2",
  divider: "#EEEFF2",
  primary: "#010205",
  secondary: "#535457",
  placeholder: "#949598",
  gold: "#E7C684",
  dark: "#111315",
  darkSoft: "#2F3334",
  success: "#2AB65F",
};

function pdcnText(name, characters, options) {
  options = options || {};
  return textNode(name, characters, {
    fontFamily: options.fontFamily || "PingFang SC",
    fontStyle: options.fontStyle || "Regular",
    fontSize: options.fontSize || 12,
    lineHeight: options.lineHeight || 20,
    color: options.color || PDCN.primary,
    maxWidth: options.maxWidth || 335,
  });
}

function sectionNode(name, nodes, options) {
  options = options || {};
  return frameNode(
    name,
    {
      width: options.width || 375,
      itemSpacing: options.itemSpacing === undefined ? 12 : options.itemSpacing,
      paddingTop: options.paddingTop === undefined ? 18 : options.paddingTop,
      paddingBottom: options.paddingBottom === undefined ? 18 : options.paddingBottom,
      paddingLeft: options.paddingLeft === undefined ? 20 : options.paddingLeft,
      paddingRight: options.paddingRight === undefined ? 20 : options.paddingRight,
      fills: [{ type: "SOLID", color: options.fill || PDCN.surface, opacity: 1 }],
      counterAxisAlignItems: options.counterAxisAlignItems || "MIN",
    },
    nodes
  );
}

function sectionTitleNode(title, subtitle) {
  var nodes = [
    pdcnText("Section title", title, { fontStyle: "Semibold", fontSize: 18, lineHeight: 26 }),
  ];
  if (subtitle) {
    nodes.push(pdcnText("Section subtitle", subtitle, { fontSize: 11, lineHeight: 18, color: PDCN.placeholder }));
  }
  return frameNode("Section heading", { width: 335, itemSpacing: subtitle ? 2 : 0 }, nodes);
}

function pdcnDivider(name, width) {
  return instanceNode("PorscheCNV3/Divider", name || "Divider", {
    width: width || 335,
    height: 1,
    fallback: {
      type: "rectangle",
      name: name || "Divider fallback",
      width: width || 335,
      height: 1,
      fills: [{ type: "SOLID", color: PDCN.divider, opacity: 1 }],
    },
  });
}

function pdcnTag(label, options) {
  options = options || {};
  return instanceNode("PorscheCNV3/Tag", "Tag - " + label, {
    overrides: { $texts: [label], "标签": label },
    fallback: {
      type: "frame",
      name: "Tag fallback - " + label,
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 0,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 6,
      paddingRight: 6,
      cornerRadius: 4,
      fills: [{ type: "SOLID", color: options.fill || PDCN.muted, opacity: 1 }],
      nodes: [pdcnText("Tag label", label, { fontSize: 10, lineHeight: 18, color: options.color || PDCN.primary })],
    },
  });
}

function pdcnButton(name, label, primary, width) {
  return {
    type: "button",
    name: name,
    label: label,
    width: width || 140,
    height: 44,
    cornerRadius: 2,
    fills: [{ type: "SOLID", color: primary ? PDCN.primary : PDCN.surface, opacity: 1 }],
    stroke: primary ? null : { color: PDCN.primary, weight: 1 },
    textFills: [{ type: "SOLID", color: primary ? "#FFFFFF" : PDCN.primary, opacity: 1 }],
    fontStyle: "Semibold",
  };
}

function iconNode(name, iconName, size, fallbackText, color) {
  return instanceNode("Icon/" + iconName, name, {
    width: size || 24,
    height: size || 24,
    fallback: {
      type: "text",
      name: name + " fallback",
      characters: fallbackText || "•",
      fontSize: size ? Math.max(12, size - 4) : 18,
      lineHeight: size || 24,
      fills: [{ type: "SOLID", color: color || PDCN.primary, opacity: 1 }],
      maxWidth: size || 24,
      textAlignHorizontal: "CENTER",
    },
  });
}

function specCell(value, label) {
  return frameNode(
    "Spec - " + label,
    {
      width: 111,
      itemSpacing: 2,
      counterAxisAlignItems: "CENTER",
      fills: [{ type: "SOLID", color: PDCN.surface, opacity: 1 }],
    },
    [
      pdcnText("Spec value", value, { fontFamily: "Porsche Next", fontStyle: "Semibold", fontSize: 15, lineHeight: 22, maxWidth: 111 }),
      pdcnText("Spec label", label, { fontSize: 10, lineHeight: 16, color: PDCN.secondary, maxWidth: 111 }),
    ]
  );
}

function specGrid(specs) {
  return frameNode(
    "核心参数宫格",
    {
      width: 335,
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 0,
      fills: [{ type: "SOLID", color: PDCN.surface, opacity: 1 }],
    },
    [specCell(specs[0][0], specs[0][1]), specCell(specs[1][0], specs[1][1]), specCell(specs[2][0], specs[2][1])]
  );
}

function heroVideoSection(data) {
  var model = data.heroTitle || data.model || "Panamera 4 E-Hybrid 行政加长版";
  var subtitle = data.heroSubtitle || "全新豪华运动轿车 · 插电式混合动力";
  return frameNode(
    "主图视频区",
    {
      width: 375,
      height: 282,
      primaryAxisSizingMode: "FIXED",
      itemSpacing: 8,
      paddingTop: 132,
      paddingBottom: 18,
      paddingLeft: 20,
      paddingRight: 20,
      fills: [{ type: "SOLID", color: PDCN.dark, opacity: 1 }],
      clipsContent: true,
    },
    [
      frameNode(
        "播放按钮",
        {
          width: 48,
          height: 48,
          primaryAxisSizingMode: "FIXED",
          counterAxisSizingMode: "FIXED",
          primaryAxisAlignItems: "CENTER",
          counterAxisAlignItems: "CENTER",
          cornerRadius: 24,
          fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 0.78 }],
        },
        [iconNode("播放图标", "Extra/play-filled", 24, "▶", PDCN.primary)]
      ),
      pdcnText("主视觉标题", model, { fontFamily: "Porsche Next", fontStyle: "Semibold", fontSize: 22, lineHeight: 30, color: "#FFFFFF", maxWidth: 335 }),
      pdcnText("主视觉副标题", subtitle, { fontSize: 12, lineHeight: 18, color: "#E5E7EB", maxWidth: 335 }),
    ]
  );
}

function headerWithStatus(title) {
  return [
    instanceNode("PorscheCNV3/Status bar", "Status bar", { width: 375, height: 44 }),
    headerNode(title),
  ];
}

function frameNode(name, options, nodes) {
  options = options || {};
  var result = {
    type: "frame",
    name: name,
    width: options.width,
    layoutMode: options.layoutMode || "VERTICAL",
    primaryAxisSizingMode: options.primaryAxisSizingMode || "AUTO",
    counterAxisSizingMode: options.counterAxisSizingMode || "FIXED",
    primaryAxisAlignItems: options.primaryAxisAlignItems || "MIN",
    counterAxisAlignItems: options.counterAxisAlignItems || "MIN",
    itemSpacing: options.itemSpacing || 0,
    fills: options.fills || [],
    clipsContent: options.clipsContent === undefined ? false : options.clipsContent,
    nodes: nodes || [],
  };

  if (options.height !== undefined) result.height = options.height;
  if (options.paddingTop !== undefined) result.paddingTop = options.paddingTop;
  if (options.paddingBottom !== undefined) result.paddingBottom = options.paddingBottom;
  if (options.paddingLeft !== undefined) result.paddingLeft = options.paddingLeft;
  if (options.paddingRight !== undefined) result.paddingRight = options.paddingRight;
  if (options.cornerRadius !== undefined) result.cornerRadius = options.cornerRadius;
  if (options.stroke) result.stroke = options.stroke;
  return result;
}

function cardNode(name, nodes) {
  return frameNode(
    name,
    {
      width: 343,
      itemSpacing: 12,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 18,
      paddingRight: 18,
      cornerRadius: 8,
      fills: [{ type: "SOLID", color: "#FFFFFF", opacity: 1 }],
      stroke: { color: "#E5E7EB", weight: 1 },
    },
    nodes
  );
}

function instanceNode(use, name, options) {
  options = options || {};
  var result = {
    type: "instance",
    use: use,
    name: name || use,
  };
  if (options.width !== undefined) result.width = options.width;
  if (options.height !== undefined) result.height = options.height;
  if (options.overrides) result.overrides = options.overrides;
  if (options.properties) result.properties = options.properties;
  if (options.variant) result.variant = options.variant;
  if (options.fallback) result.fallback = options.fallback;
  return result;
}

function headerNode(title) {
  return instanceNode("PorscheCNV3/Header", "顶部导航", {
    width: 375,
    height: 56,
    overrides: {
      $texts: [title],
      Title: title,
      title: title,
      "标题不超过八个字符": title,
    },
  });
}

function textListNode(name, title, content) {
  return instanceNode("PorscheCNV3/Text List", name, {
    width: 307,
    height: 56,
    overrides: {
      $texts: [title, content],
      "列表名称": title,
      "内容": content,
    },
  });
}

function tagNode(label, name) {
  return instanceNode("PorscheCNV3/Tag", name || "标签-" + label, {
    overrides: {
      $texts: [label],
      "标签": label,
    },
  });
}

function buttonNode(name, label, active) {
  return {
    type: "button",
    name: name,
    label: label,
    width: 97,
    height: 40,
    cornerRadius: 4,
    fills: [{ type: "SOLID", color: active ? "#111315" : "#F2F3F4", opacity: 1 }],
    textFills: [{ type: "SOLID", color: active ? "#FFFFFF" : "#111315", opacity: 1 }],
  };
}

function buildFinanceCalculatorScreen(data, device) {
  var title = data.title || "金融计算器";
  var model = data.model || "Taycan 4 Cross Turismo";
  var price = data.price || "¥ 968,000";
  var downPayment = data.downPayment || "30% · ¥ 290,400";
  var term = data.term || "36 期";
  var balloon = data.balloon || "20% · ¥ 193,600";
  var totalInterest = data.totalInterest || "¥ 31,860";
  var monthlyPayment = data.monthlyPayment || "¥ 14,062 / 月";
  var principal = data.principal || "贷款本金 ¥484,000";
  var finalPayment = data.finalPayment || "到期尾款 ¥193,600";
  var primaryCta = data.primaryCta || "申请预审";
  var secondaryCta = data.secondaryCta || "保存方案";
  var interestOptions = Array.isArray(data.interestOptions) && data.interestOptions.length
    ? data.interestOptions.slice(0, 3)
    : ["固定 2.88%", "优惠 1.99%", "限时 0%"];
  while (interestOptions.length < 3) interestOptions.push("利率选项");

  var doc = mobileFrame(data.name || "保时捷金融计算器", { width: device === "mobile-390" ? 390 : 375 });

  doc.nodes.push(instanceNode("PorscheCNV3/Status bar", "Status bar", { width: 375, height: 44 }));
  doc.nodes.push(headerNode(title));

  doc.nodes.push(frameNode(
    "页面内容",
    {
      width: 375,
      itemSpacing: 12,
      paddingTop: 12,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      counterAxisAlignItems: "CENTER",
      fills: [{ type: "SOLID", color: "#F5F6F7", opacity: 1 }],
    },
    [
      cardNode("车辆与报价卡片", [
        textNode("主标题", data.heroTitle || "定制你的保时捷金融方案", {
          fontStyle: "Semibold",
          fontSize: 20,
          lineHeight: 28,
        }),
        textNode("副标题", data.heroSubtitle || "选择车款、首付、期限与利息选项，快速预估月供", {
          fontSize: 12,
          lineHeight: 18,
          color: "#62676B",
        }),
        textListNode("车辆选择", "已选车型", model),
        instanceNode("PorscheCNV3/Divider", "车辆卡片分割线", { width: 307, height: 1 }),
        frameNode(
          "报价摘要",
          {
            width: 307,
            layoutMode: "HORIZONTAL",
            primaryAxisSizingMode: "FIXED",
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            itemSpacing: 8,
          },
          [
            frameNode(
              "价格组",
              { width: 149, itemSpacing: 4 },
              [
                textNode("价格标签", "车辆价格", { fontSize: 12, lineHeight: 18, color: "#62676B", maxWidth: 149 }),
                textNode("价格值", price, { fontStyle: "Semibold", fontSize: 22, lineHeight: 30, maxWidth: 149 }),
              ]
            ),
            frameNode(
              "金融标签组",
              {
                width: 150,
                layoutMode: "HORIZONTAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                counterAxisAlignItems: "CENTER",
                itemSpacing: 8,
              },
              [tagNode("低息"), tagNode("灵活尾款")]
            ),
          ]
        ),
      ]),
      cardNode("方案参数卡片", [
        textNode("方案标题", "金融方案", { fontStyle: "Semibold", fontSize: 16, lineHeight: 24 }),
        frameNode(
          "方案标签",
          {
            width: 307,
            layoutMode: "HORIZONTAL",
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            itemSpacing: 8,
          },
          [tagNode("标准贷款", "方案-标准贷款"), tagNode("弹性尾款", "方案-弹性尾款"), tagNode("先享后选", "方案-先享后选")]
        ),
        textListNode("首付比例", "首付比例", downPayment),
        textListNode("贷款期限", "贷款期限", term),
        textListNode("尾款设置", "尾款比例", balloon),
      ]),
      cardNode("利息选项卡片", [
        textNode("利息标题", "利息选项", { fontStyle: "Semibold", fontSize: 16, lineHeight: 24 }),
        frameNode(
          "利率选择",
          {
            width: 307,
            layoutMode: "HORIZONTAL",
            primaryAxisSizingMode: "FIXED",
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            itemSpacing: 8,
          },
          [
            buttonNode("利率选项1", interestOptions[0], true),
            buttonNode("利率选项2", interestOptions[1], false),
            buttonNode("利率选项3", interestOptions[2], false),
          ]
        ),
        textListNode("利息说明", "预计总利息", totalInterest),
      ]),
      frameNode(
        "月供结果卡片",
        {
          width: 343,
          itemSpacing: 12,
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 18,
          paddingRight: 18,
          cornerRadius: 8,
          fills: [{ type: "SOLID", color: "#111315", opacity: 1 }],
        },
        [
          textNode("月供标签", "预计月供", { fontSize: 13, lineHeight: 20, color: "#C8CDD1" }),
          textNode("月供金额", monthlyPayment, { fontStyle: "Semibold", fontSize: 30, lineHeight: 38, color: "#FFFFFF" }),
          frameNode(
            "结果明细",
            {
              width: 307,
              layoutMode: "HORIZONTAL",
              primaryAxisSizingMode: "FIXED",
              counterAxisSizingMode: "AUTO",
              counterAxisAlignItems: "CENTER",
              itemSpacing: 10,
            },
            [
              textNode("贷款本金", principal, { fontSize: 12, lineHeight: 18, color: "#C8CDD1", maxWidth: 145 }),
              textNode("到期尾款", finalPayment, { fontSize: 12, lineHeight: 18, color: "#C8CDD1", maxWidth: 145 }),
            ]
          ),
        ]
      ),
      textNode("免责声明", data.disclaimer || "以上结果仅为估算，实际金融方案、利率和审批结果以保时捷金融服务及授权经销商确认为准。", {
        fontSize: 11,
        lineHeight: 17,
        color: "#777C80",
        maxWidth: 343,
      }),
    ]
  ));

  doc.nodes.push(instanceNode("PorscheCNV3/Tool Bar", "底部工具栏", {
    width: 375,
    height: 72,
    overrides: {
      $texts: [secondaryCta, primaryCta],
      "按钮": primaryCta,
      Button: primaryCta,
    },
  }));
  doc.nodes.push(instanceNode("PorscheCNV3/Home Indicator", "Home Indicator", { width: 375, height: 34 }));

  return doc;
}

function buildNewCarDetailScreen(data, device) {
  var model = data.model || "Panamera 4 E-Hybrid 行政加长版";
  var price = data.price || "¥ 1,368,000 起";
  var tags = Array.isArray(data.tags) && data.tags.length ? data.tags.slice(0, 4) : ["新车", "可预订", "混合动力"];
  var specs = Array.isArray(data.specs) && data.specs.length >= 3
    ? data.specs.slice(0, 3)
    : [["3.2 s", "0-100 km/h"], ["346 kW", "系统功率"], ["96 km", "纯电续航"]];
  var primaryCta = data.primaryCta || "立即配置";
  var secondaryCta = data.secondaryCta || "预约试驾";

  var doc = mobileFrame(data.name || "Porsche V3 新车详情页", { width: device === "mobile-390" ? 390 : 375 });
  doc.frame.fills = [{ type: "SOLID", color: PDCN.page, opacity: 1 }];
  doc.nodes = headerWithStatus(data.title || "Panamera");
  doc.nodes.push(heroVideoSection({ model: model, heroSubtitle: data.heroSubtitle || "全新豪华运动轿车 · 插电式混合动力" }));
  doc.nodes.push(sectionNode("车型与价格", [
    pdcnText("车型名称", model, { fontFamily: "Porsche Next", fontStyle: "Semibold", fontSize: 17, lineHeight: 24, textAlignHorizontal: "CENTER" }),
    frameNode("标签行", {
      width: 335,
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "CENTER",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 8,
      fills: [{ type: "SOLID", color: PDCN.surface, opacity: 1 }],
    }, tags.map(function(label, index) { return pdcnTag(label, { fill: index === 0 ? PDCN.gold : PDCN.surface }); })),
    pdcnText("建议零售价", price, { fontFamily: "Porsche Next", fontStyle: "Semibold", fontSize: 24, lineHeight: 32, textAlignHorizontal: "CENTER" }),
    pdcnText("价格说明", data.priceNote || "厂商建议零售价 · 价格可能因配置而变化", { fontSize: 11, lineHeight: 16, color: "#7C7F81", textAlignHorizontal: "CENTER" }),
  ], { itemSpacing: 8, counterAxisAlignItems: "CENTER" }));
  doc.nodes.push(frameNode("金融方案入口", {
    width: 375,
    height: 56,
    layoutMode: "HORIZONTAL",
    primaryAxisSizingMode: "FIXED",
    counterAxisSizingMode: "FIXED",
    counterAxisAlignItems: "CENTER",
    itemSpacing: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fills: [{ type: "SOLID", color: PDCN.surface, opacity: 1 }],
  }, [
    iconNode("金融卡图标", "card", 24, "▣"),
    pdcnText("金融文案", data.finance || "灵活金融方案，首付低至 20% 起", { fontSize: 14, lineHeight: 22, maxWidth: 279 }),
    iconNode("进入金融", "head-right", 24, "›"),
  ]));
  doc.nodes.push(sectionNode("核心参数", [specGrid(specs), pdcnButton("更多性能参数", "更多性能参数", false, 295)], { itemSpacing: 14, counterAxisAlignItems: "CENTER" }));
  doc.nodes.push(sectionNode("个性化配置", [
    sectionTitleNode("个性化配置", "- PERSONALIZATION -"),
    frameNode("配置分类", {
      width: 335,
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      itemSpacing: 18,
      fills: [{ type: "SOLID", color: PDCN.surface, opacity: 1 }],
    }, [
      pdcnText("外观", "外观", { fontSize: 12, lineHeight: 20, maxWidth: 32 }),
      pdcnText("内饰", "内饰", { fontStyle: "Semibold", fontSize: 12, lineHeight: 20, maxWidth: 32 }),
      pdcnText("轮毂", "轮毂", { fontSize: 12, lineHeight: 20, maxWidth: 32 }),
      pdcnText("音响通讯", "音响/通讯系统", { fontSize: 12, lineHeight: 20, maxWidth: 92 }),
    ]),
    frameNode("内饰预览", { width: 335, height: 188, primaryAxisSizingMode: "FIXED", cornerRadius: 0, fills: [{ type: "SOLID", color: "#D8D4CD", opacity: 1 }] }, [
      pdcnText("图片说明", "内饰预览图", { fontSize: 12, lineHeight: 18, color: PDCN.secondary, maxWidth: 335, textAlignHorizontal: "CENTER" }),
    ]),
    pdcnText("选装名称", data.optionName || "黑色/哑光米色双色调真皮内饰", { fontStyle: "Semibold", fontSize: 14, lineHeight: 22 }),
    pdcnText("选装价格", data.optionPrice || "¥ 39,300", { fontSize: 12, lineHeight: 20 }),
    pdcnText("选装说明", data.optionDescription || "双色调组合：舒适座椅、组件与饰板使用协调内饰色调，营造更具层次的豪华氛围。", { fontSize: 11, lineHeight: 18, color: PDCN.secondary }),
    pdcnButton("全部选装信息", "全部选装信息", false, 295),
  ], { itemSpacing: 12, counterAxisAlignItems: "CENTER" }));
  doc.nodes.push(sectionNode("新车专属购车权益", [
    pdcnText("权益标题", "新车专属购车权益", { fontStyle: "Semibold", fontSize: 18, lineHeight: 26, color: "#FFFFFF" }),
    pdcnText("权益说明", "从配置咨询到交付用车，全流程官方服务保障", { fontSize: 12, lineHeight: 20, color: "#D8DADD" }),
    benefitRow("官方授权经销商交付", "透明订单与生产进度跟踪"),
    benefitRow("保时捷原厂质保", "覆盖新车整车及核心部件"),
    benefitRow("专属顾问服务", "提供配置、金融与试驾预约支持"),
  ], { fill: PDCN.darkSoft, itemSpacing: 14, paddingTop: 22, paddingBottom: 22 }));
  doc.nodes.push(toolbarNode(secondaryCta, primaryCta));
  doc.nodes.push(instanceNode("PorscheCNV3/Home Indicator", "Home Indicator", { width: 375, height: 34 }));
  return doc;
}

function benefitRow(title, description) {
  return frameNode("权益 - " + title, {
    width: 335,
    layoutMode: "HORIZONTAL",
    primaryAxisSizingMode: "FIXED",
    counterAxisSizingMode: "AUTO",
    itemSpacing: 10,
    fills: [],
  }, [
    iconNode("权益勾选", "success-filled", 18, "●", "#FFFFFF"),
    frameNode("权益文案", { width: 307, itemSpacing: 2, fills: [] }, [
      pdcnText("权益标题", title, { fontStyle: "Semibold", fontSize: 12, lineHeight: 18, color: "#FFFFFF", maxWidth: 307 }),
      pdcnText("权益说明", description, { fontSize: 10, lineHeight: 16, color: "#D8DADD", maxWidth: 307 }),
    ]),
  ]);
}

function toolbarNode(secondaryCta, primaryCta) {
  return instanceNode("PorscheCNV3/Tool Bar", "底部工具栏", {
    width: 375,
    height: 76,
    overrides: { $texts: [secondaryCta, primaryCta], "按钮": primaryCta, Button: primaryCta },
    fallback: frameNode("底部操作栏", {
      width: 375,
      height: 76,
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 14,
      paddingTop: 10,
      paddingBottom: 14,
      paddingLeft: 16,
      paddingRight: 16,
      fills: [{ type: "SOLID", color: PDCN.surface, opacity: 1 }],
    }, [
      pdcnButton("Secondary CTA", secondaryCta, false, 150),
      pdcnButton("Primary CTA", primaryCta, true, 165),
    ]),
  });
}

function buildUsedCarDetailScreen(data, device) {
  data = data || {};
  var cloned = {};
  for (var key in data) cloned[key] = data[key];
  cloned.name = data.name || "Porsche V3 易手车详情页";
  cloned.title = data.title || "车辆详情";
  cloned.model = data.model || "911 Carrera";
  cloned.heroSubtitle = data.heroSubtitle || "保时捷认可易手车 · 现车可预约";
  cloned.price = data.price || "¥ 932,000";
  cloned.tags = data.tags || ["认证易手车", "可预约", "低里程"];
  cloned.specs = data.specs || [["2.8 万", "公里"], ["2024.04", "上牌"], ["上海", "经销商"]];
  cloned.finance = data.finance || "官方金融方案，支持在线预审";
  cloned.optionName = data.optionName || "Sport Chrono 组件 / BOSE 环绕声音响";
  cloned.optionPrice = data.optionPrice || "已包含";
  cloned.optionDescription = data.optionDescription || "核心热门选装已包含，车况、保养与认证记录可由经销商进一步确认。";
  cloned.secondaryCta = data.secondaryCta || "联系顾问";
  cloned.primaryCta = data.primaryCta || "预约看车";
  return buildNewCarDetailScreen(cloned, device);
}

function buildVehicleRecommendationScreen(data, device) {
  var doc = mobileFrame(data.name || "Porsche V3 推荐车辆", { width: device === "mobile-390" ? 390 : 375 });
  doc.frame.fills = [{ type: "SOLID", color: "#EEEFF2", opacity: 1 }];
  doc.nodes = headerWithStatus(data.title || "推荐车辆");
  doc.nodes.push(sectionNode("顾问推荐说明", [
    pdcnText("推荐标题", data.heroTitle || "按你的购车需求推荐", { fontStyle: "Semibold", fontSize: 20, lineHeight: 28 }),
    pdcnText("推荐说明", data.heroSubtitle || "根据车型、预算、里程与选装偏好，为你匹配全国可预约车辆。", { fontSize: 12, lineHeight: 20, color: PDCN.secondary }),
    frameNode("需求标签", { width: 335, layoutMode: "HORIZONTAL", primaryAxisSizingMode: "AUTO", counterAxisSizingMode: "AUTO", itemSpacing: 8, fills: [] }, [pdcnTag("高匹配"), pdcnTag("可预约"), pdcnTag("官方认证")]),
    textListNode("偏好车型", "偏好车型", data.modelPreference || "911 / 718"),
    textListNode("预算范围", "预算范围", data.budget || "¥ 700,000 - ¥ 900,000"),
    textListNode("重点选装", "重点选装", data.options || "Sport Chrono / PASM / BOSE"),
  ], { fill: PDCN.surface, itemSpacing: 12 }));
  doc.nodes.push(recommendationCard(data.primaryVehicle || {
    model: "911 Carrera Coupe",
    price: "¥ 828,000",
    meta: "GT 银 · 12,800 km · Sport Chrono",
    dealer: "上海浦西保时捷中心",
    match: "98% 匹配",
  }));
  doc.nodes.push(recommendationCard(data.secondaryVehicle || {
    model: "718 Cayman Style Edition",
    price: "¥ 768,000",
    meta: "冰灰金属漆 · 8,600 km · BOSE",
    dealer: "杭州保时捷中心",
    match: "92% 匹配",
  }));
  doc.nodes.push(toolbarNode(data.secondaryCta || "调整需求", data.primaryCta || "预约看车"));
  doc.nodes.push(instanceNode("PorscheCNV3/Home Indicator", "Home Indicator", { width: 375, height: 34 }));
  return doc;
}

function recommendationCard(vehicle) {
  return sectionNode("推荐车辆 - " + vehicle.model, [
    frameNode("车辆图片", { width: 335, height: 160, primaryAxisSizingMode: "FIXED", cornerRadius: 8, fills: [{ type: "SOLID", color: "#D8DADD", opacity: 1 }], counterAxisAlignItems: "CENTER", primaryAxisAlignItems: "CENTER" }, [
      pdcnText("车辆图片说明", vehicle.model + " 车辆图片", { fontSize: 12, lineHeight: 18, color: PDCN.secondary, maxWidth: 220, textAlignHorizontal: "CENTER" }),
    ]),
    frameNode("车辆标签", { width: 335, layoutMode: "HORIZONTAL", primaryAxisSizingMode: "AUTO", counterAxisSizingMode: "AUTO", itemSpacing: 8, fills: [] }, [pdcnTag(vehicle.match), pdcnTag("认证易手车")]),
    pdcnText("车型", vehicle.model, { fontFamily: "Porsche Next", fontStyle: "Semibold", fontSize: 18, lineHeight: 26 }),
    pdcnText("价格", vehicle.price, { fontFamily: "Porsche Next", fontStyle: "Semibold", fontSize: 22, lineHeight: 30 }),
    textListNode("经销商", vehicle.dealer, vehicle.meta),
    pdcnText("推荐理由", vehicle.reason || "推荐理由：颜色、预算和核心选装高度匹配，可预约近期看车。", { fontSize: 11, lineHeight: 18, color: PDCN.secondary }),
  ], { fill: PDCN.surface, itemSpacing: 10 });
}
