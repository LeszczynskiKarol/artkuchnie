import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.artkuchnie.pl",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
