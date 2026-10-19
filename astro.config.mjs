// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://shotmark.win",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  devToolbar: { enabled: false },
});
