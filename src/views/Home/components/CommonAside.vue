<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    text-color="#fff"
    :collapse='isCollapse'
    :collapse-transition="true"
  >
    <el-menu-item
      v-for="item in RouterMenu"
      :key="item.name"
      @click="ClickMenu(item)"
      
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import RouterMenu from "@/router/Menu";
import { useRouter } from "vue-router";
import { ref } from "vue";

// console.log(RouterMenu);

const isCollapse = ref(false)

const router = useRouter();

const ClickMenu = (item: any) => {
  router.push({
    name: item.name,
  });
};
</script>

<style scoped>
.el-menu {
  border: none;
}
</style>
