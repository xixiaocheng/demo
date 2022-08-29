import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import vue3 from "@vitejs/plugin-vue";
import * as compiler from "@vue/compiler-sfc";
import { isVue2 } from "vue-demi";

console.log(isVue2)
import path from "path";
const resolve = (str) => {
  return path.resolve(__dirname, str);
};

export default defineConfig({
  build: {
    outDir: resolve("lib"),
    lib: {
      entry: resolve("main.js"),
    },
    rollupOptions: {
      external: ["vue-demi", "vue"],
      output: {
        // dir: getLibDir(version),
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi'
        }
      }
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [isVue2 ? createVuePlugin() : vue3({ compiler })],
});
