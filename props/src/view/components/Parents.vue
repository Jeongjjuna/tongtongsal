<script setup lang="ts">

import Child from "@/view/components/Child.vue";
import {ref} from "vue";

const randomNumber = ref(10);
const propsTitle = ref("제목입니다.")
const propsContent = ref("내용입니다.")

const onIncrementPoint = (number: number) => {
  randomNumber.value = number
}

</script>

<template>
  <!--
  <자식 컴포넌트명
    v-bind:Prop명="템플릿 변수명"
    ...
  />
  -->
  <div class="parent-container">
    <h1>부모</h1>
    <p>랜덤 포인트 : {{ randomNumber }}</p>
    <Child
        v-bind:title="propsTitle"
        v-bind:content="propsContent"
        v-model:randomNumber="randomNumber"
        v-on:incrementPoint="onIncrementPoint"
    />
  </div>
</template>

<style scoped>
.parent-container {
  border: #a82256 2px solid;
  margin: 10px;
}
</style>