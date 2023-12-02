<script setup>
import { RouterView } from "vue-router"
import NavMain from "./components/NavMain.vue"
</script>

<template>
  <NavMain />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
