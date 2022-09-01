<template>
  <div>about</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  asyncData() {
    console.log('>>> about [aysncData]');
    return Promise.resolve();
  },
  setup() {
    return {
      test: 1,
    };
  },
});
</script>
<style></style>
