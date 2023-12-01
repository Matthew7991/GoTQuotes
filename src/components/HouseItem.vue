<script setup>
import { RouterLink } from "vue-router"

defineProps(["slug"])
</script>

<template>
  <RouterLink :to="'/houses/' + slug">
    <slot></slot>
  </RouterLink>
</template>
