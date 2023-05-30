<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-menu-item v-for="item in RouterMenu" :key="item.name">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import RouterMenu from '@/router/Menu';

console.log(RouterMenu);


</script>

<style scoped>

</style>
