figma.showUI(__html__, { width: 420, height: 520 });

figma.ui.onmessage = async (msg) => {
  if (!msg || typeof msg !== "object") {
    return;
  }

  if (msg.type === "read-keys") {
    const selection = figma.currentPage.selection;
    if (!selection.length) {
      figma.ui.postMessage({
        type: "keys-result",
        keys: [],
        message: "Select one or more components / instances first.",
      });
      return;
    }

    const keys = [];
    for (const node of selection) {
      try {
        if (node.type === "COMPONENT") {
          keys.push({ name: node.name, key: node.key, kind: "COMPONENT" });
        } else if (node.type === "COMPONENT_SET") {
          keys.push({ name: node.name, key: node.key, kind: "COMPONENT_SET" });
        } else if (node.type === "INSTANCE") {
          const main = await node.getMainComponentAsync();
          if (main) {
            const ownerKey =
              main.parent && main.parent.type === "COMPONENT_SET"
                ? main.parent.key
                : main.key;
            keys.push({
              name: node.name,
              key: main.key,
              setKey: ownerKey,
              kind: "INSTANCE_MAIN",
            });
          }
        }
      } catch (error) {
        // Skip nodes whose key cannot be read, such as detached or local-only nodes.
      }
    }

    figma.ui.postMessage({
      type: "keys-result",
      keys,
      message: keys.length
        ? `Found ${keys.length} key(s).`
        : "No library component keys found in selection.",
    });
    return;
  }

  if (msg.type === "scan-all-keys") {
    try {
      await figma.loadAllPagesAsync();
    } catch (error) {
      // Older API versions load pages eagerly; ignore if unsupported.
    }

    const components = figma.root.findAllWithCriteria({
      types: ["COMPONENT", "COMPONENT_SET"],
    });

    const dictionary = {};
    let count = 0;

    for (const node of components) {
      if (
        node.type === "COMPONENT" &&
        node.parent &&
        node.parent.type === "COMPONENT_SET"
      ) {
        continue;
      }

      if (!node.key) {
        continue;
      }

      const name = node.name || `Component ${count + 1}`;
      dictionary[name] = node.key;
      count += 1;
    }

    figma.ui.postMessage({
      type: "scan-result",
      dictionary,
      count,
      message: count
        ? `Scanned ${count} component(s) from this file.`
        : "No published components found. Open the library SOURCE file.",
    });
    return;
  }

  if (msg.type === "close") {
    figma.closePlugin();
  }
};
