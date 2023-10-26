import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-2nq4.onrender.com",
  integrations: [preact()]
});