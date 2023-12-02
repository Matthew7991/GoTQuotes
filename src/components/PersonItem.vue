<script setup>
import { RouterLink } from "vue-router"
import HouseItem from "./HouseItem.vue"

defineProps(["slug", "house"])
</script>

<template>
  <div>
    <RouterLink :to="'/persons/' + slug">
      <p>Name: <slot></slot></p>
    </RouterLink>

    <HouseItem
      v-if="house?.slug"
      :slug="house.slug"
      >{{ house.name }}</HouseItem
    >
    <p v-else-if="typeof house === 'string'">House: {{ house }}</p>
    <p v-else>House: Unkown</p>
  </div>
</template>
