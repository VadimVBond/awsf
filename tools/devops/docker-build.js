import { execSync } from "child_process";

try {
  execSync("docker build -t my-app .", { stdio: "inherit" });
  console.log("✅ Docker image built successfully");
} catch (e) {
  console.error("❌ Docker build failed");
}
