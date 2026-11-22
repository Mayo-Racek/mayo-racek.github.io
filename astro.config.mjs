import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mayoracek.com",
  integrations: [mdx(), sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !pathname.startsWith('/projects/') &&
        !pathname.startsWith('/lab/') &&
        pathname !== '/start/' && pathname !== '/404/';
    }
  }), tailwind()],
});
