// Figma runtime renderer shared by the MCP render script.
// This file is generated from the previous plugin renderer and expects figma, KEY_DICTIONARY, FONT_FALLBACK, and RENDER_DIAGNOSTICS globals.

async function renderDocument(doc) {
  RENDER_DIAGNOSTICS = [];
  validateDoc(doc);

  const frame = figma.createFrame();
  frame.name = doc.name || "Generated Layout";

  applyBaseLayout(frame, doc.frame || {});

  if (Array.isArray(doc.nodes)) {
    for (const child of doc.nodes) {
      const node = await renderNode(child);
      frame.appendChild(node);
    }
  }

  figma.currentPage.appendChild(frame);
  frame.x = figma.viewport.center.x - frame.width / 2;
  frame.y = figma.viewport.center.y - frame.height / 2;
  return frame;
}

async function renderNode(spec) {
  if (!spec || typeof spec !== "object") {
    throw new Error("Invalid node specification.");
  }

  switch (spec.type) {
    case "frame": {
      const frame = figma.createFrame();
      frame.name = spec.name || "Frame";
      applyBaseLayout(frame, spec);
      if (Array.isArray(spec.nodes)) {
        for (const child of spec.nodes) {
          const childNode = await renderNode(child);
          frame.appendChild(childNode);
        }
      }
      return frame;
    }

    case "rectangle": {
      const rect = figma.createRectangle();
      rect.name = spec.name || "Rectangle";
      applySize(rect, spec);
      if (typeof spec.cornerRadius === "number") {
        rect.cornerRadius = spec.cornerRadius;
      }
      applyFills(rect, spec.fills);
      applyStroke(rect, spec.stroke);
      return rect;
    }

    case "text": {
      const text = figma.createText();
      text.name = spec.name || "Text";

      const segments = Array.isArray(spec.segments) ? spec.segments : null;
      const firstSegment = segments && segments[0] ? segments[0] : null;
      const fontName = {
        family:
          (firstSegment && firstSegment.fontFamily) ||
          spec.fontFamily ||
          FONT_FALLBACK.family,
        style:
          (firstSegment && firstSegment.fontStyle) ||
          spec.fontStyle ||
          FONT_FALLBACK.style,
      };

      const loadedFontName = await ensureFont(fontName);
      text.fontName = loadedFontName;

      if (segments) {
        text.characters = segments.map((segment) => String(segment.text || "")).join("");
        let cursor = 0;
        for (const segment of segments) {
          const value = String(segment.text || "");
          const nextCursor = cursor + value.length;
          if (nextCursor > cursor) {
            const segmentFont = {
              family: segment.fontFamily || fontName.family,
              style: segment.fontStyle || fontName.style,
            };
            const loadedSegmentFont = await ensureFont(segmentFont);
            text.setRangeFontName(cursor, nextCursor, loadedSegmentFont);
          }
          cursor = nextCursor;
        }
      } else {
        text.characters = String(spec.characters || "");
      }

      if (typeof spec.fontSize === "number") {
        text.fontSize = spec.fontSize;
      }
      if (typeof spec.lineHeight === "number") {
        text.lineHeight = { unit: "PIXELS", value: spec.lineHeight };
      }
      if (typeof spec.letterSpacing === "number") {
        text.letterSpacing = { unit: "PIXELS", value: spec.letterSpacing };
      }
      if (spec.textAlignHorizontal) {
        text.textAlignHorizontal = spec.textAlignHorizontal;
      }
      if (spec.textAlignVertical) {
        text.textAlignVertical = spec.textAlignVertical;
      }
      if (typeof spec.maxWidth === "number") {
        text.resize(spec.maxWidth, text.height);
        text.textAutoResize = "HEIGHT";
      }

      applyFills(text, spec.fills || [solid("#111827")]);
      return text;
    }

    case "input": {
      return renderInput(spec);
    }

    case "button": {
      return renderButton(spec);
    }

    case "instance": {
      return renderInstance(spec);
    }

    default:
      throw new Error(`Unsupported node type: ${spec.type}`);
  }
}

// Resolve a component instance from the team library. A stored key may point
// to a single COMPONENT or to a COMPONENT_SET (variants). We try component
// lookup first, and on failure fall back to component-set lookup (and the
// reverse with setKey), so the dictionary can hold either kind of key.
async function instantiateFromLibrary(key, setKey, variantProps) {
  const candidates = [];
  if (key) candidates.push(key);
  if (setKey && setKey !== key) candidates.push(setKey);

  let lastError = null;

  for (const candidate of candidates) {
    // Try as a single component.
    try {
      const component = await figma.importComponentByKeyAsync(candidate);
      return component.createInstance();
    } catch (error) {
      lastError = error;
    }

    // Try as a component set (variants).
    try {
      const set = await figma.importComponentSetByKeyAsync(candidate);
      const variant = set.defaultVariant || set.children[0];
      const instance = variant.createInstance();
      if (variantProps) {
        try {
          instance.setProperties(variantProps);
        } catch (error) {
          // Keep default variant if the requested props don't exist.
        }
      }
      return instance;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("No valid component key to import.");
}

async function renderInstance(spec) {
  let key = spec.key;
  let setKey = spec.setKey;
  const localName = spec.localName || spec.use;

  if (spec.use) {
    const resolved = KEY_DICTIONARY[spec.use];
    if (resolved) {
      key = resolved;
      if (!setKey) {
        setKey = resolved;
      }
    }
  }

  if (!key && !localName) {
    throw new Error(
      "instance node requires a 'key' or a 'use' name that exists in component-keys.json."
    );
  }

  let instance;
  try {
    // 1) Local-first: if the component lives in THIS file (e.g. the library
    //    source file), use it directly. No publishing required.
    const local = await findLocalComponent(key, localName);
    if (local) {
      instance = local.createInstance();
    } else {
      if (!key) {
        throw new Error(
          `Unknown component name in 'use': ${spec.use}. Add it to component-keys.json, or keep a local component named ${localName} in the current Figma file.`
        );
      }
      // 2) Team library import. A stored key can refer to either a single
      //    COMPONENT or a COMPONENT_SET (variants). We don't always know
      //    which, so try component first, then fall back to component set.
      const variant =
        spec.variant && typeof spec.variant === "object" ? spec.variant : null;

      instance = await instantiateFromLibrary(key, setKey, variant);
    }
  } catch (error) {
    if (spec.fallback && typeof spec.fallback === "object") {
      return renderNode(spec.fallback);
    }

    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Import failed for ${spec.use || key}: ${reason}. ` +
        `Tip: run the plugin inside the library SOURCE file, or publish the component to the team library.`
    );
  }

  instance.name = spec.name || instance.name;

  if (spec.diagnostics) {
    addInstanceDiagnostics(spec, instance, "before properties");
  }

  if (spec.autoVariant && typeof spec.autoVariant === "object") {
    await applyAutoVariant(instance, spec);
  }

  if (typeof spec.width === "number" && typeof spec.height === "number") {
    instance.resize(spec.width, spec.height);
  } else if (typeof spec.width === "number") {
    instance.resize(spec.width, instance.height);
  }

  if (spec.properties && typeof spec.properties === "object") {
    applyInstanceProperties(instance, spec.properties, spec);
  }

  if (Array.isArray(spec.propertyCandidates)) {
    applyInstancePropertyCandidates(instance, spec.propertyCandidates, spec);
  }

  if (spec.overrides && typeof spec.overrides === "object") {
    await applyTextOverrides(instance, spec.overrides);
  }

  if (spec.diagnostics) {
    addInstanceDiagnostics(spec, instance, "after properties");
  }

  return instance;
}

function cloneComponentProperties(instance) {
  const result = {};
  if (!instance.componentProperties) {
    return result;
  }

  const names = Object.keys(instance.componentProperties);
  for (const name of names) {
    const property = instance.componentProperties[name];
    const snapshot = {};
    if (property && typeof property === "object") {
      snapshot.type = property.type;
      snapshot.value = property.value;
      if (Array.isArray(property.preferredValues)) {
        snapshot.preferredValues = property.preferredValues.map((item) => {
          if (!item || typeof item !== "object") {
            return item;
          }
          return {
            type: item.type,
            name: item.name,
            key: item.key,
          };
        });
      }
    }
    result[name] = snapshot;
  }

  return result;
}

function addInstanceDiagnostics(spec, instance, stage) {
  RENDER_DIAGNOSTICS.push({
    kind: "instance-properties",
    stage,
    name: spec.name || instance.name,
    use: spec.use || null,
    componentProperties: cloneComponentProperties(instance),
  });
}

async function getVariantValues(instance, propertyName) {
  const values = [];

  try {
    const main = await instance.getMainComponentAsync();
    if (!main || !main.parent || main.parent.type !== "COMPONENT_SET") {
      return values;
    }

    for (const child of main.parent.children) {
      if (child.type !== "COMPONENT" || !child.variantProperties) {
        continue;
      }

      const value = child.variantProperties[propertyName];
      if (typeof value === "string") {
        values.push({ value, componentName: child.name });
      }
    }
  } catch (error) {
    // If Figma cannot expose the main component, skip auto variant selection.
  }

  return values;
}

function scoreVariantValue(value, componentName, config) {
  const text = `${value} ${componentName || ""}`.toLowerCase();
  const includes = Array.isArray(config.include) ? config.include : [];
  const prefers = Array.isArray(config.prefer) ? config.prefer : [];
  const excludes = Array.isArray(config.exclude) ? config.exclude : [];

  for (const token of excludes) {
    if (text.includes(String(token).toLowerCase())) {
      return -1000;
    }
  }

  let score = 0;
  for (const token of includes) {
    if (text.includes(String(token).toLowerCase())) {
      score += 10;
    }
  }
  for (const token of prefers) {
    if (text.includes(String(token).toLowerCase())) {
      score += 3;
    }
  }

  return score;
}

async function applyAutoVariant(instance, spec) {
  const config = spec.autoVariant;
  const propertyName = config.property || "Type";
  const values = await getVariantValues(instance, propertyName);
  let best = null;
  let fallback = null;

  for (const item of values) {
    const score = scoreVariantValue(item.value, item.componentName, config);
    if (score > -1000 && !fallback) {
      fallback = {
        value: item.value,
        componentName: item.componentName,
        score,
        fallback: true,
      };
    }
    if (score > 0 && (!best || score > best.score)) {
      best = {
        value: item.value,
        componentName: item.componentName,
        score,
      };
    }
  }

  if (!best) {
    best = fallback;
  }

  if (spec.diagnostics) {
    RENDER_DIAGNOSTICS.push({
      kind: "variant-options",
      name: spec.name || instance.name,
      property: propertyName,
      values,
      selected: best,
    });
  }

  if (!best) {
    return;
  }

  applySingleInstanceProperty(instance, propertyName, best.value, spec);
}

function normalizeComponentPropertyName(name) {
  return String(name)
    .split("#")[0]
    .trim()
    .toLowerCase()
    .replace(/[\s_\-/]+/g, "");
}

function findInstancePropertyName(instance, requestedName) {
  if (!instance.componentProperties) {
    return requestedName;
  }

  const available = Object.keys(instance.componentProperties);
  for (const name of available) {
    if (name === requestedName) {
      return name;
    }
  }

  const normalized = normalizeComponentPropertyName(requestedName);
  for (const name of available) {
    if (normalizeComponentPropertyName(name) === normalized) {
      return name;
    }
  }

  return requestedName;
}

function resolveComponentPropertyValue(value) {
  if (typeof value === "string" && KEY_DICTIONARY[value]) {
    return KEY_DICTIONARY[value];
  }

  return value;
}

function applySingleInstanceProperty(instance, requestedName, value, spec) {
  const propertyName = findInstancePropertyName(instance, requestedName);
  const propertyValue = resolveComponentPropertyValue(value);
  const nextProperties = {};
  nextProperties[propertyName] = propertyValue;

  try {
    instance.setProperties(nextProperties);
    if (spec && spec.diagnostics) {
      RENDER_DIAGNOSTICS.push({
        kind: "property-set",
        name: spec.name || instance.name,
        requestedName,
        resolvedName: propertyName,
        value,
        resolvedValue: propertyValue,
        ok: true,
      });
    }
  } catch (error) {
    if (spec && spec.diagnostics) {
      RENDER_DIAGNOSTICS.push({
        kind: "property-set",
        name: spec.name || instance.name,
        requestedName,
        resolvedName: propertyName,
        value,
        resolvedValue: propertyValue,
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

function applyInstanceProperties(instance, properties, spec) {
  for (const name of Object.keys(properties)) {
    applySingleInstanceProperty(instance, name, properties[name], spec);
  }
}

function asArray(value) {
  return Array.isArray(value) ? value : [value];
}

function applyInstancePropertyCandidates(instance, candidates, spec) {
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") {
      continue;
    }

    const names = candidate.names || candidate.name || candidate.properties || candidate.property;
    const hasValue = Object.prototype.hasOwnProperty.call(candidate, "value");
    const values = hasValue ? candidate.value : candidate.values;

    if (!names || typeof values === "undefined") {
      continue;
    }

    const nameList = asArray(names);
    const valueList = asArray(values);

    for (const name of nameList) {
      for (const value of valueList) {
        applySingleInstanceProperty(instance, name, value, spec);
      }
    }
  }
}

let LOCAL_COMPONENT_INDEX = null;

async function buildLocalComponentIndex() {
  if (LOCAL_COMPONENT_INDEX) {
    return LOCAL_COMPONENT_INDEX;
  }

  try {
    await figma.loadAllPagesAsync();
  } catch (error) {
    // Older API versions load pages eagerly; ignore if unsupported.
  }

  const byKey = new Map();
  const byName = new Map();

  const nodes = figma.root.findAllWithCriteria({
    types: ["COMPONENT", "COMPONENT_SET"],
  });

  for (const node of nodes) {
    // Prefer the COMPONENT_SET; skip variant children to instance the set.
    if (
      node.type === "COMPONENT" &&
      node.parent &&
      node.parent.type === "COMPONENT_SET"
    ) {
      continue;
    }

    if (node.key) {
      byKey.set(node.key, node);
    }
    if (node.name && !byName.has(node.name)) {
      byName.set(node.name, node);
    }
  }

  LOCAL_COMPONENT_INDEX = { byKey, byName };
  return LOCAL_COMPONENT_INDEX;
}

async function findLocalComponent(key, name) {
  const index = await buildLocalComponentIndex();

  // 1) Try by key (works when keys match the current file).
  let node = key ? index.byKey.get(key) : null;

  // 2) Try by full name as given (e.g. exact local name).
  if (!node && name) {
    node = index.byName.get(name);
  }

  // 3) Try by name with the library namespace prefix stripped, e.g.
  //    "PorscheCNV3/Status bar" -> "Status bar". This makes it work in the
  //    library source/draft file even when keys differ from the dictionary.
  if (!node && name && name.includes("/")) {
    const plain = name.slice(name.indexOf("/") + 1);
    node = index.byName.get(plain);
  }

  if (!node) {
    return null;
  }

  // A COMPONENT_SET cannot be instanced directly; use its default variant.
  if (node.type === "COMPONENT_SET") {
    return node.defaultVariant || node.children[0] || null;
  }

  return node;
}

async function applyTextOverrides(instance, overrides) {
  const textNodes = instance.findAllWithCriteria
    ? instance.findAllWithCriteria({ types: ["TEXT"] })
    : instance.findAll((node) => node.type === "TEXT");

  const ordered = Array.isArray(overrides.$texts) ? overrides.$texts : [];
  let orderedIndex = 0;

  for (const textNode of textNodes) {
    let nextValue = null;

    if (Object.prototype.hasOwnProperty.call(overrides, textNode.name)) {
      nextValue = overrides[textNode.name];
    } else if (
      typeof textNode.characters === "string" &&
      Object.prototype.hasOwnProperty.call(overrides, textNode.characters)
    ) {
      nextValue = overrides[textNode.characters];
    } else if (orderedIndex < ordered.length) {
      nextValue = ordered[orderedIndex];
      orderedIndex += 1;
    }

    if (nextValue !== null) {
      try {
        await figma.loadFontAsync(textNode.fontName);
        textNode.characters = String(nextValue);
      } catch (error) {
        // Skip text nodes with mixed/unavailable fonts.
      }
    }
  }
}

async function renderInput(spec) {
  const shell = figma.createFrame();
  shell.name = spec.name || "Input";
  shell.layoutMode = "VERTICAL";
  shell.counterAxisSizingMode = "AUTO";
  shell.primaryAxisSizingMode = "AUTO";
  shell.itemSpacing = 6;

  const label = await renderNode({
    type: "text",
    name: `${shell.name}/Label`,
    characters: spec.label || "Label",
    fontSize: 13,
    fontFamily: spec.labelFontFamily || "PingFang SC",
    fontStyle: "Regular",
    fills: [solid("#374151")],
  });

  const field = figma.createFrame();
  field.name = `${shell.name}/Field`;
  field.layoutMode = "HORIZONTAL";
  field.primaryAxisAlignItems = "MIN";
  field.counterAxisAlignItems = "CENTER";
  field.itemSpacing = 8;
  field.paddingLeft = 12;
  field.paddingRight = 12;
  field.paddingTop = 10;
  field.paddingBottom = 10;
  field.cornerRadius = typeof spec.cornerRadius === "number" ? spec.cornerRadius : 10;
  field.primaryAxisSizingMode = "FIXED";
  field.counterAxisSizingMode = "AUTO";
  field.resize(typeof spec.width === "number" ? spec.width : 320, 44);
  applyFills(field, spec.fills || [solid("#FFFFFF")]);
  applyStroke(field, spec.stroke || { color: "#D1D5DB", weight: 1 });

  const placeholder = await renderNode({
    type: "text",
    name: `${shell.name}/Placeholder`,
    characters: spec.placeholder || "Enter value",
    fontSize: 14,
    fills: [solid("#9CA3AF")],
    fontFamily: spec.placeholderFontFamily || "PingFang SC",
    fontStyle: "Regular",
  });

  field.appendChild(placeholder);
  shell.appendChild(label);
  shell.appendChild(field);
  return shell;
}

async function renderButton(spec) {
  const frame = figma.createFrame();
  frame.name = spec.name || "Button";
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisSizingMode = "FIXED";
  frame.counterAxisSizingMode = "AUTO";
  frame.primaryAxisAlignItems = "CENTER";
  frame.counterAxisAlignItems = "CENTER";
  frame.paddingLeft = 16;
  frame.paddingRight = 16;
  frame.paddingTop = 10;
  frame.paddingBottom = 10;
  frame.cornerRadius = typeof spec.cornerRadius === "number" ? spec.cornerRadius : 10;
  frame.itemSpacing = 8;
  frame.resize(typeof spec.width === "number" ? spec.width : 320, typeof spec.height === "number" ? spec.height : 44);

  applyFills(frame, spec.fills || [solid("#111827")]);
  if (spec.stroke) {
    applyStroke(frame, spec.stroke);
  }

  const label = await renderNode({
    type: "text",
    name: `${frame.name}/Label`,
    characters: spec.label || "Button",
    fontSize: 14,
    fontFamily: spec.fontFamily || "PingFang SC",
    fontStyle: spec.fontStyle || "Regular",
    fills: spec.textFills || [solid("#FFFFFF")],
    textAlignHorizontal: "CENTER",
  });

  frame.appendChild(label);
  return frame;
}

function applyBaseLayout(frame, spec) {
  frame.layoutMode = spec.layoutMode || "VERTICAL";

  const width = typeof spec.width === "number" ? spec.width : 100;
  const height = typeof spec.height === "number" ? spec.height : 1;
  frame.resize(width, height);

  frame.primaryAxisSizingMode = spec.primaryAxisSizingMode || "FIXED";
  frame.counterAxisSizingMode = spec.counterAxisSizingMode || "FIXED";

  if (typeof spec.minWidth === "number") {
    frame.minWidth = spec.minWidth;
  }
  if (typeof spec.minHeight === "number") {
    frame.minHeight = spec.minHeight;
  }

  if (typeof spec.padding === "number") {
    frame.paddingTop = spec.padding;
    frame.paddingRight = spec.padding;
    frame.paddingBottom = spec.padding;
    frame.paddingLeft = spec.padding;
  } else {
    frame.paddingTop = typeof spec.paddingTop === "number" ? spec.paddingTop : 0;
    frame.paddingRight = typeof spec.paddingRight === "number" ? spec.paddingRight : 0;
    frame.paddingBottom = typeof spec.paddingBottom === "number" ? spec.paddingBottom : 0;
    frame.paddingLeft = typeof spec.paddingLeft === "number" ? spec.paddingLeft : 0;
  }

  frame.itemSpacing = typeof spec.itemSpacing === "number" ? spec.itemSpacing : 0;
  frame.cornerRadius = typeof spec.cornerRadius === "number" ? spec.cornerRadius : 0;
  frame.primaryAxisAlignItems = spec.primaryAxisAlignItems || "MIN";
  frame.counterAxisAlignItems = spec.counterAxisAlignItems || "MIN";
  frame.clipsContent = Boolean(spec.clipsContent);
  applyFills(frame, Array.isArray(spec.fills) ? spec.fills : [solid("#F9FAFB")]);

  if (spec.stroke) {
    applyStroke(frame, spec.stroke);
  }
}

function applySize(node, spec) {
  const width = typeof spec.width === "number" ? spec.width : 100;
  const height = typeof spec.height === "number" ? spec.height : 100;
  node.resize(width, height);
}

function applyFills(node, fills) {
  if (!Array.isArray(fills)) {
    return;
  }

  if (fills.length === 0) {
    node.fills = [];
    return;
  }

  node.fills = fills.map((fill) => {
    if (fill.type === "SOLID") {
      return {
        type: "SOLID",
        color: hexToRgb(fill.color || "#000000"),
        opacity: typeof fill.opacity === "number" ? fill.opacity : 1,
      };
    }
    return fill;
  });
}

function applyStroke(node, stroke) {
  if (!stroke || typeof stroke !== "object") {
    return;
  }

  const color = stroke.color || "#D1D5DB";
  const weight = typeof stroke.weight === "number" ? stroke.weight : 1;
  node.strokes = [{ type: "SOLID", color: hexToRgb(color), opacity: 1 }];
  node.strokeWeight = weight;
}

function validateDoc(doc) {
  if (!doc || typeof doc !== "object") {
    throw new Error("Document must be an object.");
  }

  if (!Array.isArray(doc.nodes)) {
    throw new Error("Document must include a nodes array.");
  }
}

function solid(color, opacity = 1) {
  return { type: "SOLID", color, opacity };
}

function hexToRgb(hex) {
  const normalized = String(hex).replace("#", "").trim();
  if (![3, 6].includes(normalized.length)) {
    return { r: 0, g: 0, b: 0 };
  }

  const expanded = normalized.length === 3
    ? normalized
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : normalized;

  const intVal = Number.parseInt(expanded, 16);
  return {
    r: ((intVal >> 16) & 255) / 255,
    g: ((intVal >> 8) & 255) / 255,
    b: (intVal & 255) / 255,
  };
}

async function ensureFont(fontName) {
  const candidates = getFontCandidates(fontName);
  for (const candidate of candidates) {
    try {
      await figma.loadFontAsync(candidate);
      return candidate;
    } catch (error) {
      // Try the next common style alias.
    }
  }

  try {
    await figma.loadFontAsync(FONT_FALLBACK);
    return FONT_FALLBACK;
  } catch (error) {
    const systemFallback = { family: "Inter", style: "Regular" };
    await figma.loadFontAsync(systemFallback);
    return systemFallback;
  }
}

function getFontCandidates(fontName) {
  if (!fontName || typeof fontName !== "object") {
    return [FONT_FALLBACK];
  }

  const family = fontName.family || FONT_FALLBACK.family;
  const style = fontName.style || FONT_FALLBACK.style;
  const candidates = [{ family, style }];

  if (family === "Porsche Next") {
    const aliasesByStyle = {
      Semibold: ["SemiBold", "Semi Bold", "Bold", "Regular"],
      SemiBold: ["Semibold", "Semi Bold", "Bold", "Regular"],
      "Semi Bold": ["Semibold", "SemiBold", "Bold", "Regular"],
      Bold: ["Semibold", "SemiBold", "Semi Bold", "Regular"],
      Regular: ["Book", "Normal"],
    };
    const aliases = aliasesByStyle[style] || [];
    for (const alias of aliases) {
      candidates.push({ family, style: alias });
    }
  }

  return candidates;
}
