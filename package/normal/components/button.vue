<template>
  <div class="main-btn" @click="btnFun">{{ number }}</div>
</template>
  
  <script>
import Vue from "vue";
import Card from "./card.vue";

export default {
  name: "demo-button",
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    plus() {
      this.number += 1;
    },
    btnFun() {
      const node = document.getElementById("game-card");
      const gameCardComponent = Vue.extend(Card);
      const gameCardInstance = new gameCardComponent({
        propsData: {
          btnObj: this,
        },
      }).$mount();
      document.body.appendChild(gameCardInstance.$el);
    },
  },
};
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