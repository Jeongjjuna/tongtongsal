<script setup lang="ts">

import Child from "@/view/components/Child.vue";
</script>

<template>
  <div class="container">
    <h1>부모</h1>
    <Child></Child>
  </div>
</template>

<style scoped>
.container {
  border: #a82256 2px solid;
  margin: 10px;
}
</style>