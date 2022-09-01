<template>
  <div id="app">
    <game_btn ref="btn" />
    <div @click="test">点击</div>
  </div>
</template>

<script>
import game_btn from "../../../package/v2/lib/v2/demo";

export default {
  name: "App",
  components: {
    game_btn,
  },
  methods: {
    test() {
      console.log(this.$refs.btn.btnFun());
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
