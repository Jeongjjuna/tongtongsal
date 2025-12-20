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
        type="text"
        class="collapse-toggle"
        :class="{ open: !isCollapse, closed: isCollapse }"
        @click="isCollapse = !isCollapse"
    >
      <el-icon>
        <Operation/>
      </el-icon>
    </el-button>

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

.collapse-toggle {
  font-size: 22px;
  padding-left: 20px;
  transition: color 0.2s ease;
}

/* 닫힘 상태 */
.collapse-toggle.closed {
  color: #909399; /* 회색 */
}

/* 열림 상태 */
.collapse-toggle.open {
  color: #409eff; /* 파랑 */
}

/* hover */
.collapse-toggle:hover {
  color: var(--el-color-primary-light-3);
}

/* active */
.collapse-toggle:active {
  color: var(--el-color-primary-dark-2);
}


</style>