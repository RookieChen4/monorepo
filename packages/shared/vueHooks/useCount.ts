import { ref } from 'vue';
export default function useCount() {
  const count = ref(0);
  const setCount = (val: number): void => {
    count.value = val;
  };
  return {
    count,
    setCount,
  };
}
