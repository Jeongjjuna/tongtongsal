<script setup lang="ts">

import {reactive} from "vue";
import type {Member} from "@/interfaces/Member.ts";
import {useRouter} from "vue-router";

const router = useRouter();

const member: Member = reactive(
    {
      id: 0,
      name: "",
      email: "",
      points: 0,
      note: ""
    }
)

const onAdd = () => {
  console.log(member);

  // 1. 라우터 이름을 통해 라우팅한다.
  router.push({ name: "MemberList" });

  // 2. 경로를 직접 적는것은 비추천
  // router.push("/member/memberList");

  // 3.경로 파라미터도 지정
  // router.push({ name: "MemberDetail", params: { id: member.id } });

  /**
   * push 메서드 이외에도 replace(), back() forward(), go() 등 여러 메서드가 존재한다.
   */
}
</script>

<template>
  <h1>회원 등록</h1>
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
      <li>회원 정보 추가</li>
    </ul>
  </nav>
  <section>
    <h2>회원 정보 추가</h2>
    <p>
      정보를 입력하고 등록 버튼을 클릭해주세요.
    </p>
    <form v-on:submit.prevent="onAdd">
      <dl>
        <dt>
          <label for="addId">ID&nbsp;</label>
        </dt>
        <dd>
          <input type="number" id="addId" v-model.number="member.id" required>
        </dd>
        <dt>
          <label for="addName">이름&nbsp;</label>
        </dt>
        <dd>
          <input type="text" id="addName" v-model="member.name" required>
        </dd>
        <dt>
          <label for="addEmail">메일 주소&nbsp;</label>
        </dt>
        <dd>
          <input type="email" id="addEmail" v-model="member.email" required>
        </dd>
        <dt>
          <label for="addPoints">보유 포인트&nbsp;</label>
        </dt>
        <dd>
          <input type="number" id="addPoints" v-model.number="member.points" required>
        </dd>
        <dt>
          <label for="addNote">비고</label>
        </dt>
        <dd>
          <textarea id="addNote" v-model="member.note"></textarea>
        </dd>
      </dl>
      <button type="submit">등록</button>
    </form>
  </section>
</template>

<style scoped>

</style>