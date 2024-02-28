// Setup Store
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1); // State
  const doubleCount = computed(() => count.value * 2); // Gatters
  function increment() {
    count.value++;
  } //Method

  return { count, doubleCount, increment };
});
