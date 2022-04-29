import { ref } from 'vue';
type count = {
  count: import('vue').Ref<number>;
  add: () => void;
};
export default function useCount(): count {
  const count = ref(0);
  const add = () => {
    count.value++;
  };
  return {
    count,
    add,
  };
}
