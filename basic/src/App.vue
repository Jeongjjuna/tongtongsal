<script setup lang="ts">

import {provide} from "vue";
import type {Member} from "@/interfaces/Member.ts";
import {membersKey} from "@/keys/membersKey.ts";
import SideMenu from "@/views/SideMenu.vue";

const members = new Map<number, Member>();
members.set(33456, {
  id: 33456,
  name: "영희",
  email: "bow@example.com",
  points: 35,
  note: "신규 가입 특전"
});
members.set(33457, {
  id: 33457,
  name: "철수",
  email: "mue@example.com",
  points: 35
});
provide(membersKey, members);

</script>

<template>

  <el-row :gutter="20">
    <el-col :span="20">
      <header>
        <h1>Vue 라우터 샘플</h1>
      </header>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="8">
      <aside id="sidebar">
        <SideMenu/>
      </aside>
    </el-col>
    <el-col :span="12">
      <main>
        <RouterView/>
      </main>
    </el-col>
  </el-row>

</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}

#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}

#breadcrumbs {
  margin-left: 0;
}

#breadcrumbs ul {
  padding-left: 0;
}

#breadcrumbs ul .current {
  color: red;
}

#breadcrumbs ul li:before {
  content: " > ";
}

#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
