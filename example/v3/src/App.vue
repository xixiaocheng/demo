<template>
  <div>
    <game_btn ref="btn" />
    <div @click="test">点击</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import game_btn from "../../../package/v2/lib/v3/demo";

const btn = ref(null);
const test = () => {
  btn.value.btnFun();
};
</script>

