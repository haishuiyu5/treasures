import { ref } from "vue";
import { defineStore } from "pinia";
// import axios from "axios";
import { userDataAPI } from "@/api/userData";

export const userDataListStore = defineStore('dataList', () => {
  const getuserDataList = ref([])
  console.log(123)
  const userData = async () => {
    console.log(456)
    const res = await userDataAPI()
    // const res = await axios.post('/api/userDataList')
    console.log(res)
    getuserDataList.value = res.data
  }
  return {
    getuserDataList,
    userData
  }
})