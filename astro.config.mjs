import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { getRedirects } from "./helpers/redirects";

// https://astro.build/config
export default defineConfig({
  site: "https://undefined.sh",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  redirects: await getRedirects(),
});
