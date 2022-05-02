<template>
  <header>数字:{{ count }}</header>
  <a-input-number :min="1" :max="10" @change="changeCount" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCount } from '@cjh/shared/vueHooks';
export default defineComponent({
  setup() {
    const { count, setCount } = useCount();
    const changeCount = (val: number): void => {
      setCount(val);
    };
    return {
      changeCount,
      count,
    };
  },
});
</script>

<style></style>
