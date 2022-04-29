<script setup lang="ts">
import { useCount } from '@cjh/utils/vueHook';
const tes = 123;
type em = {
  count: import('vue').Ref<number>;
  add: () => void;
};
const { count, add }: em = useCount();
</script>

<template>
  <button @click="add">{{ count }}</button>
  <header>{{ tes }}</header>
</template>

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
