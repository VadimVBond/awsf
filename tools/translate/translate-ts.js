const fs = require("fs");
const path = require("path");
const translate = require("@vitalets/google-translate-api");

// Настройки
const sourceFile = path.resolve(__dirname, "en.ts"); // исходный файл
const outputDir = path.resolve(__dirname, "translations");
const languages = [
  { code: "ru", exportName: "ru" },
  { code: "uk", exportName: "uk" },
  { code: "de", exportName: "de" }
];

// Читаем исходный файл
const content = fs.readFileSync(sourceFile, "utf-8");
const lines = content.split(/\r?\n/);

// Функция перевода текста
async function translateText(text, lang) {
  try {
    const res = await translate(text, { to: lang });
    return res.text;
  } catch (e) {
    console.error(`Ошибка перевода "${text}" на ${lang}:`, e);
    return text;
  }
}

// Главная функция
(async () => {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  for (const lang of languages) {
    const outputLines = [];

    for (let line of lines) {
      const trimmed = line.trim();

      // Если строка комментария или пустая
      if (trimmed.startsWith("//") || trimmed === "" || trimmed.startsWith("export const")) {
        outputLines.push(line);
        continue;
      }

      // Попытка найти "ключ": "значение",
      const match = line.match(/(".*?")\s*:\s*(.*?)(,?)(\s*\/\/.*)?$/);
      if (match) {
        const key = match[1];
        const rawValue = match[2].trim();
        const comma = match[3] || "";
        const comment = match[4] || "";

        let value;
        try {
          // парсим значение, может быть строкой, числом, массивом или объектом
          value = eval("(" + rawValue + ")");
        } catch {
          // если не удалось распарсить, оставляем как есть
          value = rawValue;
        }

        let translated = value;

        if (typeof value === "string") {
          // пропускаем уже переведённые строки
          if (!value || value === key.replace(/"/g, '')) {
            translated = await translateText(value, lang.code);
          }
        } else if (Array.isArray(value)) {
          // массивы оставляем как есть
          translated = value;
        } else if (typeof value === "object" && value !== null) {
          // рекурсивно переводим вложенные объекты
          translated = value; // можно добавить рекурсивную обработку, если нужно
        } else {
          // числа, boolean и т.п. оставляем без изменений
          translated = value;
        }

        const translatedString = typeof translated === "string" ? `"${translated}"` : JSON.stringify(translated);
        outputLines.push(`  ${key}: ${translatedString}${comma}${comment}`);
      } else {
        // оставляем строку без изменений
        outputLines.push(line);
      }
    }

    const outputContent = outputLines.join("\n");
    fs.writeFileSync(path.join(outputDir, `${lang.code}.ts`), outputContent, "utf-8");
    console.log(`Файл перевода ${lang.code}.ts готов!`);
  }
})();
