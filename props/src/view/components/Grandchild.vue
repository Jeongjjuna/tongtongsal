<script setup lang="ts">

import {inject} from "vue";
import {dataKeys} from "@/keys/dataKeys.ts";
import type {Data} from "@/interfaces/Data.ts";

const datas = inject(dataKeys) as Array<Data>;
console.log(datas);
</script>

<template>
  <div class="grandchild-container">
    <h1>손자</h1>
    <p>조상으로부터 제공받은 데이터 목록</p>
    <ul>
      <li>{{datas[0]}}</li>
      <li>{{datas[1]}}</li>
    </ul>
  </div>
</template>

<style scoped>
.grandchild-container {
  border: #24bd2c 2px solid;
  margin: 10px;
}
</style>