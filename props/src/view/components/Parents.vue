<script setup lang="ts">

import Child from "@/view/components/Child.vue";
import {ref} from "vue";

const propsTitle = ref("제목입니다.")
const propsContent = ref("내용입니다.")

</script>

<template>
  <!--
  <자식 컴포넌트명
    v-bind:Prop명="템플릿 변수명"
    ...
  />
  -->
  <div class="container">
    <h1>부모</h1>
    <Child
      v-bind:title="propsTitle"
      v-bind:content="propsContent"
    />
  </div>
</template>

<style scoped>
.container {
  border: #a82256 2px solid;
  margin: 10px;
}
</style>