<template>
  <div class="main-btn" @click="btnFun">{{ button_name }}</div>
</template>

<script>
import {
  defineComponent,
  Vue2,
  isVue2,
  isVue3,
  createVNode,
  render,
} from "vue-demi";
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
      console.log(isVue2);
      const node = document.getElementById("game-card");
      if (!node) {
        if (isVue2) {
          // const gameCardComponent = Vue2.extend(Card);
          // const gameCardInstance = new gameCardComponent({
          //   propsData: {
          //     btnObj: this,
          //   },
          // }).$mount();
          // document.body.appendChild(gameCardInstance.$el);
        }
        if (isVue3) {
          console.log(666);
          // const gameCardComponent = createVNode(Card, {
          //   btnObj: this,
          // });
          // render(gameCardComponent, document.querySelector("body"));
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