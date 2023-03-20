import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// vite.config.js
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ["Source Sans Pro", "Capriola"],
      },
    }),
  ],
});
