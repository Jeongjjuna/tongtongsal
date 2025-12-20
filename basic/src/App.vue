<script setup lang="ts">

import {provide} from "vue";
import type {Member} from "@/interfaces/Member.ts";
import {membersKey} from "@/keys/membersKey.ts";

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
  <header>
    <h1>Vue 라우터 샘플</h1>
  </header>
  <main>
    <RouterView/>
  </main>
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
#breadcrumbs ul li:before{
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
