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
    <p>
      <!-- name 속성에 "라우팅명" 을 입력한다. -->
      <!-- <RouterLink 새="/member/memberList"> -->
      <RouterLink v-bind:to="{ name: 'MemberList' }">
        회원 관리는 여기서
      </RouterLink>
    </p>
  </section>
</template>

<style scoped>

</style>