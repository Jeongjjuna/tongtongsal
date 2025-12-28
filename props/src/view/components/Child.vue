<script setup lang="ts">

/**
 *   1. 기본 사용
 *   const props = defineProps<Props>()
 */

import Grandchild from "@/view/components/Grandchild.vue";

/**
 *   2. default 값 사용
 *
 *   withDefaults(
 *      defineProps<Props>(),
 *      {
 *          필수가 아닌 항목 Props 명: 기본값,
 *          ...
 *      }
 *   )
 */
interface Props {
  title: string
  content: string
  detail?: string
}

const defaultProps = withDefaults(
    defineProps<Props>(),
    {detail: "[undefined]"},
)

/**
 * interface Emits {
 *   (event: "이벤트명"): void;
 *   ...
 * }
 * const emit = defineEmits<Emits>();
 */
interface Emits {
  (event: "incrementPoint", randomNumber: number): void

  (event: "update:randomNumber", randomNumber: number): void
}

const emit = defineEmits<Emits>();

const emitIncrementPoint1 = (): void => {
  const randomNumber = Math.floor(Math.random() * 10) + 1
  emit('incrementPoint', randomNumber)
}

const emitIncrementPoint2 = (): void => {
  const randomNumber = Math.floor(Math.random() * 10) + 1
  emit('update:randomNumber', randomNumber)
}

</script>

<template>
  <div class="child-container">
    <h1>자식</h1>
    <ul>
      <li>{{ defaultProps.title }}</li>
      <li>{{ defaultProps.content }}</li>
      <li>{{ defaultProps.detail }}</li>
    </ul>
    <button v-on:click="emitIncrementPoint1">부모의 포인트를 랜덤으로!</button>
    <button v-on:click="emitIncrementPoint2">부모의 포인트를 랜덤으로!(v-model 활용)</button>

    <Grandchild />
  </div>
</template>

<style scoped>
.child-container {
  border: #409eff 2px solid;
  margin: 10px;
}
</style>