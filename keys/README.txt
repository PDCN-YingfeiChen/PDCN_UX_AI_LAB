Put one JSON file per Figma library here, e.g.:

  keys/porsche-app.json
  keys/design-system.json

Each file is a flat map of "Component Name" -> "component key", exactly
the output of the plugin's "Scan ALL components in this file" button.

The file name (without .json) becomes a namespace. You can reference a
component either by its plain name ("Bottom nav") or namespaced
("porsche-app/Bottom nav") to avoid collisions between libraries.

The legacy file component-keys.json at the project root still works and
is merged together with everything in this folder.
