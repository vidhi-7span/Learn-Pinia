<!-- State become ref
Getter become Computed Property
Actions become Methods / Function  -->
<script setup>
import { useCounterStore } from "../stores/counter.js";
// import { storeToRefs } from "pinia";
const store = useCounterStore();

// Wrong way to destructuring
// const { count, doubleCount, increment } = store;

// Correct way to Destructure refs
// const { count, doubleCount } = storeToRefs(store);

// Actions can be Destructured normally
// const { increment } = store;
</script>

<template>
  <div>A Component</div>
  <h2>Count: {{ store.count }}</h2>
  <h2>Double Count: {{ store.doubleCount }}</h2>
  <button @click="store.increment">Increment</button>

  <!-- <h2>Count: {{ count }}</h2>
  <h2>Double Count: {{ doubleCount }}</h2>
  <button @click="increment">Increment</button> -->
</template>

<style></style>
