<!-- State become ref
Getter become Computed Property
Actions become Methods / Function  -->
<script setup>
import { useCounterStore } from "../stores/counter.js";
const store = useCounterStore();
// store.count = 100;

// Mutating State Passing Object
// store.$patch({
//   count: store.count + 10,
//   name: "Nidhi",
// });

// Mutating State Passing Function
store.$patch((state) => {
  state.items.push("React.js");
});

// Replacing the State
store.$state = { count: 30 };
</script>

<template>
  <div>A Component</div>
  <h2>Count: {{ store.count }}</h2>
  <h2>Double Count: {{ store.doubleCount }}</h2>
  <h2>Name: {{ store.name }}</h2>
  <h2>Items: {{ store.items }}</h2>
  <button @click="store.increment">Increment</button>
</template>

<style></style>
