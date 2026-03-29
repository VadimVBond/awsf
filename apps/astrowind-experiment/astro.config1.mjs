import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com",
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", ru: "ru", uk: "uk", fr: "fr", de: "de" },
      },
    }),
  ],
  i18n: {
    locales: ["en", "ru", "uk", "fr", "de"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
});
