<script setup lang="ts">

import SideMenu from "@/views/SideMenu.vue";
import {useMembersStore} from "@/stores/members.ts";

const memberStore = useMembersStore();
memberStore.initMembers();

</script>

<template>

  <el-row :gutter="20">
    <el-col :span="20">
      <header>
        <h1>Pinia 샘플</h1>
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
