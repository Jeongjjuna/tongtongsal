<script setup lang="ts">

import Parents from "@/view/components/Parents.vue";

import type {Data} from "@/interfaces/Data.ts";
import {provide} from "vue";
import {dataKeys} from "@/keys/dataKeys.ts";

/**
 * 데이터 주입 준비 완료
 */
const datas = new Array<Data>();
datas.push({id: 1, notice: "알림1"})
datas.push({id: 2, notice: "알림2"})

provide(dataKeys, datas)

</script>

<template>
  <h2>Home</h2>
  <p>자손에게 제공할 데이터 목록</p>
  <ul>
    <li>{{datas[0]}}</li>
    <li>{{datas[1]}}</li>
  </ul>
  <Parents/>
</template>

<style scoped>

</style>