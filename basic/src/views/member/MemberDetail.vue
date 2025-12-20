<script setup lang="ts">

import {computed, inject} from "vue";
import type {Member} from "@/interfaces/Member.ts";
import {membersKey} from "@/keys/membersKey.ts";

const props = defineProps<{
  id: number
}>();

const members = inject(membersKey) as Map<number, Member>;

const member = computed((): Member => {
  return members.get(props.id) as Member;
})

const localNote = computed(
    (): string => {
      let localNote = "--";
      if (member.value.note != undefined) {
        localNote = member.value.note;
      }
      return localNote;
    }
)

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
      <li>
        <RouterLink v-bind:to="{ name: 'MemberList' }">
          회원 리스트
        </RouterLink>
      </li>
      <li>회원 상세 정보</li>
    </ul>
  </nav>
  <section>
    <h2>회원 상세 정보</h2>
    <dl>
      <dt>ID</dt>
      <dt>{{ member.id }}</dt>
      <dt>이름</dt>
      <dt>{{ member.name }}</dt>
      <dt>메일주소</dt>
      <dt>{{ member.email }}</dt>
      <dt>보유 포인트</dt>
      <dt>{{ member.points }}</dt>
      <dt>비고</dt>
      <dt>{{ localNote }}</dt>
    </dl>
  </section>
</template>

<style scoped>

</style>