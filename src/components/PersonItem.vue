<script setup>
import { RouterLink } from "vue-router"

defineProps(["slug"])
</script>

<template>
  <RouterLink :to="'/persons/' + slug">
    <slot></slot>
  </RouterLink>
</template>
