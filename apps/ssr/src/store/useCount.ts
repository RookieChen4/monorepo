import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('count', () => {
  const count = ref(0);
  const setCount = () => {
    count.value++;
  };
  return {
    count,
    setCount,
  };
});
