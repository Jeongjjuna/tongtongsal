<script setup lang="ts">

</script>

<template>
  <h1>TOP</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <section>
    <ul>
      <li>
        <!-- name 속성에 "라우팅명" 을 입력한다. -->
        <!-- <RouterLink 새="/member/memberList"> -->
        <RouterLink v-bind:to="{ name: 'MemberList' }">
          회원 관리는 여기서
        </RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{ name: 'ComponentList' }">
          컴포넌트 관리는 여기서
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>