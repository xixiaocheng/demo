import { defineConfig } from "vite";
import VitePluginStyleInject from 'vite-plugin-style-inject';
import { createVuePlugin } from "vite-plugin-vue2";
import vue3 from "@vitejs/plugin-vue";
import * as compiler from "@vue/compiler-sfc";
import { isVue2, version } from "vue-demi";
import { getLibDir } from "./scripts/utils.mjs";

console.log(`当前的打包环境为vue ${version}`);
import path from "path";
const resolve = (str) => {
  return path.resolve(__dirname, str);
};

export default defineConfig({
  build: {
    outDir: getLibDir(version),
    lib: {
      entry: resolve("main.js"),
      name: "test",
    },
    rollupOptions: {
      // external: ["vue-demi", "vue"],
      external: ["vue"], // 理论上我觉得还是得把vue-demi打入包中，这样使用组件的项目不需要额外再安装vue-demi
      output: {
        // dir: getLibDir(version),
        globals: {
          vue: "Vue",
          // 'vue-demi': 'VueDemi'
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  // plugin: [ createVuePlugin(), VitePluginStyleInject()],
  plugins: [
    isVue2 ? createVuePlugin() : vue3({ compiler }),
    VitePluginStyleInject(),
  ],
});
