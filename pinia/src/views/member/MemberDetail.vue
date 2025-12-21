<script setup lang="ts">

import {computed} from "vue";
import type {Member} from "@/interfaces/Member.ts";
import {useRoute, useRouter} from "vue-router";
import {useMembersStore} from "@/stores/members.ts";

const router = useRouter()

// 1. useRoute() 를 통해 경로 파라미터 정보 가져오기
const route = useRoute();
const id = route.params.id;
console.log("useRoute 를 통해 얻은 경로 파라미터 : " + id);

// 2. props 를 통해 경로 파라미터 정보 가져오기.(router > index.ts 파일에 props 변환 코드를 작성해야한다.)
const props = defineProps<{
  id: number
}>();

const memberStore = useMembersStore();

const member = computed((): Member => {
  return memberStore.getById(props.id) as Member;
})

const localNote = computed(
  (): string => {
    return member.value.note ?? "--"
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
