// Setup Store
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useName } from "../composables/name";
export const useCounterStore = defineStore("counter", () => {
  const count = ref(1); // State
  const name = ref("Vdihi"); // State
  const name2 = useName(); // State
  const items = ref(["Vue.js"]); // State
  const doubleCount = computed(() => count.value * 2); // Gatters
  function increment() {
    count.value++;
  } //Method

  return { count, name, name2, items, doubleCount, increment };
});
