import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import vue3 from "@vitejs/plugin-vue";
import * as compiler from "@vue/compiler-sfc";
import { isVue2, version } from "vue-demi";

console.log(`当前的打包环境为vue ${version}`)
import path from "path";
const resolve = (str) => {
  return path.resolve(__dirname, str);
};

export default defineConfig({
  build: {
    outDir: resolve("lib"),
    lib: {
      entry: resolve("main.js"),
      name: "test",
    },
    rollupOptions: {
      external: ["vue-demi", "vue"], // 理论上我觉得还是得把vue-demi打入包中，这样使用组件的项目不需要额外再安装vue-demi
      // external: ['vue'],
      output: {
        // dir: getLibDir(version),
        globals: {
          vue: 'Vue',
          // 'vue-demi': 'VueDemi'
        }
      }
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [isVue2 ? createVuePlugin() : vue3({ compiler })],
});
