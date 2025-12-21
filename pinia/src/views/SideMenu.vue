<script setup lang="ts">
import {ref} from 'vue'
import {Document, Location, Menu as IconMenu, Operation, Setting,} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>

  <div class="sidebar">
    <!-- 토글 버튼 -->
    <el-button
      type="primary"
      :icon="Operation"
      @click="isCollapse = !isCollapse"
      class="collapse-toggle-btn"
    />

    <!-- 메뉴 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">

        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title>
            <span>Group One</span>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </template>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>

/* 기본 상태: hover 효과 제거 */
.collapse-toggle-btn {
  /* Element Plus 기본 hover 변수들을 덮어쓰기 */
  font-size: 20px; /* 아이콘 크기 키우기 */
  --el-button-bg-color: transparent;
  --el-button-border-color: transparent;
  --el-button-text-color: #3a597a;
  margin-left: 10px;
  padding: 11px;
}

/* hover 되었을 때만 스타일 적용 */
.collapse-toggle-btn:hover {
  background-color: #ecf5ff;     /* 원하는 hover 배경색 */
  border-color: #c6e2ff;         /* 원하는 hover border 색 */
  color: #409eff;                /* 아이콘/텍스트 색 */
}

</style>
