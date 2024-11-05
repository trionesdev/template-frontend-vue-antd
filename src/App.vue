<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN"
</script>

<template>
  <a-config-provider :locale="zhCN">
    <router-view/>
  </a-config-provider>
</template>

<style scoped>

</style>
