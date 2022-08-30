<template>
  <div class="main-btn" @click="btnFun">{{ button_name }}</div>
</template>

<script>
import { defineComponent, isVue2, Vue2, isVue3 } from "vue-demi";
// import * as vueObj from "vue-demi"; // 使用打包进库中的vue-demi，调用 createVNode、render创建的弹框Card无法携带 scoped 的样式，需要去掉scoped
import * as vueObj from "vue"; // 使用项目中的vue，调用 createVNode、render创建的弹框Card 样式正常
import Card from "./card.vue";

export default defineComponent({
  name: "demo-button",
  data() {
    return {
      button_name: "查看",
    };
  },
  methods: {
    btnFun() {
      const node = document.getElementById("game-card");
      if (!node) {
        if (isVue2) {
          const gameCardComponent = Vue2.extend(Card);
          const gameCardInstance = new gameCardComponent({
            propsData: {
              btnObj: this,
            },
          }).$mount();
          document.body.appendChild(gameCardInstance.$el);
        }
        if (isVue3) {
          const { createVNode, render } = vueObj;
          const gameCardComponent = createVNode(Card, {
            btnObj: this,
          });
          render(gameCardComponent, document.querySelector("body"));
        }
      }
    },
  },
});
</script>

<style scoped lang="scss">
.main-btn {
  margin-top: 8px;
  display: inline-block;
  cursor: pointer;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #00aeec;
  font-size: 14px;
  color: #00aeec;
  box-sizing: border-box;
}
</style>