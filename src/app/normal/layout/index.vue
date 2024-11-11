<script setup lang="ts">
import {Layout, LayoutItem, AppToolbar} from "@trionesdev/antd-vue-ext";
</script>

<template>
  <Layout direction="vertical" class="h-screen">
    <LayoutItem>
      <AppToolbar :nav-items="[{key:'1',label:'ss'}]" >
        <template #title>
          <span>TrionesDev</span>
        </template>
        <template #extra>
          <div>ss</div>
        </template>
      </AppToolbar>
    </LayoutItem>
    <LayoutItem :auto="true">
      <div>sss</div>
    </LayoutItem>
  </Layout>

</template>

<style scoped>

</style>