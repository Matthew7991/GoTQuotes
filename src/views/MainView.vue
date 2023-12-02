<script setup>
import { ref } from "vue"
import MainLayout from "../components/MainLayout.vue"
import { getGoTData } from "../utils/getGoTData.js"
import { RouterLink } from "vue-router"

const quote = ref({})

quote.value = await getGoTData("random")
</script>

<template>
  <MainLayout class="relative bg-cover bg-main-houses">
    <RouterLink
      :to="'/persons/' + quote.character.slug"
      class="absolute -translate-x-1/2 top-3/4 left-1/2 text-4xl text-center font-bold text-white px-4 py-2 bg-[#00000055] shadow-2xl shadow-[#000000ac]"
    >
      {{ quote.sentence }}
    </RouterLink>
  </MainLayout>
</template>
