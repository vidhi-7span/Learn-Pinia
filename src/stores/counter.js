// Setup Store

import { definePinia } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = definePinia("counter", () => {
  const count = ref(1); // State
  const doubleCount = computed(() => count.value * 2); // Gatters
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
