<!-- State become ref
Getter become Computed Property
Actions become Methods / Function  -->

<template>
  <div>A Component</div>
  <h2>Count: {{ store.count }}</h2>
  <h2>Double Count: {{ store.doubleCount }}</h2>
</template>

<script setup>
import { useCounterStore } from "../stores/counter.js";

const store = useCounterStore();
console.log("store======", store);
</script>
<style></style>
