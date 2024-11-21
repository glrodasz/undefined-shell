import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { SITE_URL } from "./src/consts";
import { getRedirects } from "./helpers/redirects";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-frappe",
    },
  },
  redirects: await getRedirects(),
});
