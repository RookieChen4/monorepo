<template>
  <button @click="setCount">count is: {{ count }}</button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import useCount from '../store/useCount';
export default defineComponent({
  asyncData() {
    console.log('>>> index [aysncData]');
    return Promise.resolve();
  },
  setup() {
    const { count, setCount } = toRefs(useCount());
    return {
      count,
      setCount,
    };
  },
});
</script>
<style></style>
