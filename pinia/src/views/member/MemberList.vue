<script setup lang="ts">
import {useMembersStore} from "@/stores/members.ts";

const memberStore = useMembersStore();
const members = memberStore.members;

</script>

<template>
  <h1>회원 관리</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">
          TOP
        </RouterLink>
      </li>
      <li>회원 리스트</li>
    </ul>
  </nav>
  <section>
    <h2>회원 리스트</h2>
    <p>
      신규 등록은
      <router-link v-bind:to="{ name: 'MemberAdd' }">여기를</router-link>
      클릭
    </p>
    <section>
      <ul>
        <li v-for="[id, member] in members" v-bind:key="id">
          <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: id } }">
            ID 가 {{ id }} 인 {{ member.name }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>

</style>
