<template>
  <div>
    B子组件---{{ message }}
  </div>
</template>

<script setup lang="ts">
import mitter from '@/utils/bus.js'
import { onMounted, ref } from 'vue';

let message = ref()

onMounted(() => {
  mitter.on('why', msg => {
    console.log(msg);
    message.value = msg.msg
  })
})
</script>

<style scoped>

</style>