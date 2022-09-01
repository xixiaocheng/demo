import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import VitePluginStyleInject from "vite-plugin-style-inject";

import path from "path";

export default defineConfig({
  plugins: [createVuePlugin(/*options*/), VitePluginStyleInject()],
  build: {
    outDir: path.resolve(__dirname, "lib"),
    lib: {
      entry: path.resolve(__dirname, "main.js"),
      name: "test",
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
