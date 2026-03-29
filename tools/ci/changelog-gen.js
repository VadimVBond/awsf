import { execSync } from "child_process";
import fs from "fs";

const log = execSync("git log --pretty=format:'- %s (%h)'", { encoding: "utf-8" });
fs.writeFileSync("CHANGELOG.md", `# Changelog\n\n${log}`);
console.log("✅ CHANGELOG.md updated");
