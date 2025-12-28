<script setup lang="ts">

interface Props {
  title: string
  content: string
  detail?: string
}

/**
 *   1. 기본 사용
 *   const props = defineProps<Props>()
 */

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
const defaultProps = withDefaults(
    defineProps<Props>(),
    {detail: "[undefined]"},
)

</script>

<template>
  <div class="container">
    <h1>자식</h1>
    <ul>
      <li>{{ defaultProps.title }}</li>
      <li>{{ defaultProps.content }}</li>
      <li>{{ defaultProps.detail }}</li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  border: #409eff 2px solid;
  margin: 10px;
}
</style>