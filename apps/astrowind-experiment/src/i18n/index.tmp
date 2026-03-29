export type Locale = "en" | "ru" | "uk" | "fr" | "de";

export async function loadMessages(locale: Locale) {
  switch (locale) {
    case "ru": return import("./ru.json");
    case "uk": return import("./uk.json");
    case "fr": return import("./fr.json");
    case "de": return import("./de.json");
    case "en":
    default: return import("./en.json");
  }
}

export type Messages = Record<string, string>;
