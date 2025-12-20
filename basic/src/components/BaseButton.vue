<script setup lang="ts">

// props 타입 정의
import type {Component} from "vue";

const props = withDefaults(
    defineProps<{
      type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
      plain?: boolean
      round?: boolean
      circle?: boolean
      disabled?: boolean
      loading?: boolean
      size?: 'small' | 'default' | 'large'
      icon?: Component | undefined
      tag?: string
    }>(),
    {
      type: 'primary',
      plain: false,
      round: false,
      circle: false,
      disabled: false,
      loading: false,
      size: 'default',
      icon: undefined,
      tag: 'button',
    },
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const onClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}

</script>

<template>
  <el-button
      :type="type"
      :plain="plain"
      :round="round"
      :circle="circle"
      :disabled="disabled"
      :loading="loading"
      :size="size"
      :icon="icon"
      :tag="tag"
      @click="onClick"
  >
    <!-- 아이콘 + 텍스트 조합도 지원할 수 있게 기본 슬롯 전달 -->
    <slot />
  </el-button>
</template>

<style scoped>

</style>