import { execFileSync } from "node:child_process";

const script = String.raw`
tell application "Figma" to activate
delay 1

tell application "System Events"
  if not (exists process "Figma") then error "Figma process is not available."
  tell process "Figma"
    set frontmost to true
    delay 0.5
    click menu bar item "Plugins" of menu bar 1
    delay 0.3
    click menu item "Development" of menu 1 of menu bar item "Plugins" of menu bar 1
    delay 0.3
    click menu item "Figma UI MCP Bridge" of menu 1 of menu item "Development" of menu 1 of menu bar item "Plugins" of menu bar 1
  end tell
end tell
`;

try {
  execFileSync("open", ["-a", "Figma"], { stdio: "ignore" });
  execFileSync("osascript", ["-e", script], { stdio: "inherit" });
  console.log("Requested Figma UI MCP Bridge to run in Figma Desktop.");
} catch (error) {
  console.error("Could not run Figma UI MCP Bridge automatically.");
  console.error("This usually means VS Code/Terminal lacks macOS Accessibility permission, or the bridge plugin has not been imported yet.");
  console.error("One-time fallback: Figma Desktop -> Plugins -> Development -> Figma UI MCP Bridge -> Run.");
  process.exit(1);
}
