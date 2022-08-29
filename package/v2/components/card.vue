<template>
  <div id="game-card" class="bui-modal">
    <div class="download-dialog bui-dialog">
      <div style="width: 200px; height: 30px" @click="test"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "demo-card",
  props: {
    btnObj: Object,
  },
  methods: {
    test() {
      console.log(this.btnObj);
    },
  },
});
</script>

<style lang="scss" scoped>
.bui-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.bui-dialog {
  position: relative;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.download-dialog {
  padding: 44px 64px;
}
</style>
