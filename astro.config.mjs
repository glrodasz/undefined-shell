import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { SITE_URL } from "./src/consts";
import { getRedirects } from "./helpers/redirects";
import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/config";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-frappe",
    },
  },
  redirects: await getRedirects(),
});
