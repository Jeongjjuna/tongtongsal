<script setup lang="ts">

import { Check } from '@element-plus/icons-vue'
import BaseButton from "@/components/BaseButton.vue";
import {ref} from "vue";

const onSave = () => {
  console.log("save")
}

const isSaving = ref(false)

</script>

<template>
  <h1>컴포넌트 관리</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">
          TOP
        </RouterLink>
      </li>
      <li>컴포넌트 리스트</li>
    </ul>
  </nav>
  <section>
    <div>
      <h3>버튼</h3>
      <div>
        <!-- 기본 primary 버튼 -->
        <BaseButton @click="onSave">
          저장
        </BaseButton>

        <!-- success + 아이콘 버튼 -->
        <BaseButton
            type="success"
            :icon="Check"
            :loading="isSaving"
            @click="onSave"
        >
          저장 중
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>