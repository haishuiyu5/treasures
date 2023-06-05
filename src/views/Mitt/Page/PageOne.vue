<template>
  <div>
    A子组件---<button @click="sendMessage">发送数据给兄弟组件</button>
    <hr>

  </div>
</template>

<script setup lang="ts">
import mitter from '@/utils/bus.js'

const sendMessage = () => {
  mitter.emit('why', {msg: 'Hello World'})
}

</script>

<style scoped>

</style>