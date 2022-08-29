<template>
  <div id="app">
    <game_btn />
  </div>
</template>

<script>
  import game_btn from '../../../package/v2/lib/demo';
  import '../../../package/v2/lib/style.css';

export default {
  name: 'App',
  components: {
    game_btn
  }
}
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
