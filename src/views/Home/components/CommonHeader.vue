<template>
  <div class="header">
    <div class="header-l">
      <el-icon><Menu /></el-icon>
    </div>
    <div class="header-r">
      <el-avatar :size="40" :src="circleUrl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

const { circleUrl } = toRefs(state);
</script>

<style scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
