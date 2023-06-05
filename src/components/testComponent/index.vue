<template>
  <h1>测试页面</h1>
  {{ testData[0] }}
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { userDataListStore } from "@/store/userData";
//import request from "@/utils/http";

const dataListStore = userDataListStore();

const testData = ref("");

onMounted(() => {
  testMock();
  // dataListStore.getuserDataList
  console.log(dataListStore.userData());
  getMock();
});

const getMock = async () => {
  const res = await axios.post("/api/userDataList");
  console.log(res);
};

const testMock = async () => {
  const res = await axios.get("/api/test");
  // console.log(res.data.data);
  testData.value = res.data.data;
};
</script>

<style scoped></style>
