<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><CommonAside /></el-aside>
      <el-container>
        <el-header><CommonHeader /></el-header>
        <el-main><CommonMain /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import CommonAside from './components/CommonAside.vue';
import CommonHeader from './components/CommonHeader.vue';
import CommonMain from './components/CommonMain.vue';

</script>

<style scoped lang="less">
.common-layout {
  height: 100vh;
  .el-container {
    height: 100vh;
    .el-aside {
      background-color: #545c64;
      border: none;
    }
  }
}
</style>
