<script setup lang="ts">
import { useCount } from '@cjh/utils/vueHook';
import { cjhButton } from '@cjh/ui/vueui';
import '@cjh/ui/vanilla';
type em = {
  count: import('vue').Ref<number>;
  add: () => void;
};
const buttonName = 'cjh';
const { count, add }: em = useCount();
</script>

<template>
  <cjhButton :buttonName="buttonName" @clickButtom="add" />
  <button @click="add">{{ count }}</button>
  <cjh-button2 />
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
