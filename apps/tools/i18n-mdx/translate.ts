import fs from "fs";
import path from "path";
import { translate } from "@vitalets/google-translate-api"; // pnpm add -D @vitalets/google-translate-api

// Настройка языков
const LOCALES = ["ru", "uk", "fr", "de"];
const SRC_DIR = path.resolve("en/"); // где лежат оригиналы
const OUT_DIR = path.resolve("i18n-out");     // куда складывать переводы

function isCodeOrTag(line: string): boolean {
  return line.trim().startsWith("```") || line.trim().startsWith("<") || line.trim().startsWith("{");
}

async function translateFile(filePath: string) {
  const src = fs.readFileSync(filePath, "utf8");
  const lines = src.split("\n");

  let insideCode = false;
  const translated: Record<string, string[]> = {};

  for (const loc of LOCALES) translated[loc] = [];

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      insideCode = !insideCode;
      for (const loc of LOCALES) translated[loc].push(line);
      continue;
    }

    if (insideCode || isCodeOrTag(line) || line.trim() === "") {
      for (const loc of LOCALES) translated[loc].push(line);
      continue;
    }

    for (const loc of LOCALES) {
      try {
        const res = await translate(line, { to: loc });
        translated[loc].push(res.text);
      } catch (err) {
        console.error(`❌ Ошибка перевода строки для ${loc}:`, err);
        translated[loc].push(line); // fallback — оставить оригинал
      }
    }
  }

  // Сохраняем результат
  const relPath = path.relative(SRC_DIR, filePath); // например blog/first-post.mdx
  for (const loc of LOCALES) {
    const outPath = path.join(OUT_DIR, loc, relPath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, translated[loc].join("\n"), "utf8");
    console.log(`✅ ${loc}: ${outPath}`);
  }
}

async function walkDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      await translateFile(fullPath);
    }
  }
}

async function run() {
  console.log("🌍 Старт перевода MDX…");
  await walkDir(SRC_DIR);
  console.log("✨ Готово! Переводы в:", OUT_DIR);
}

run().catch(console.error);
