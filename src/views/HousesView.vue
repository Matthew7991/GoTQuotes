<script setup>
import { ref, watchEffect } from "vue"
import HouseItem from "../components/HouseItem.vue"
import List from "../components/List.vue"
import MainLayout from "../components/MainLayout.vue"
import { getGoTData } from "../utils/getGoTData.js"

const houses = ref([])
const searchTerm = ref("")
const filteredHouses = ref(houses.value)

houses.value = await getGoTData("houses")

watchEffect(() => {
  filteredHouses.value = houses.value.filter((house) =>
    house.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>

<template>
  <MainLayout>
    <h1 class="mb-4 text-4xl font-bold text-slate-700">Houses</h1>
    <label class="block mb-2">
      <span class="sr-only">Search for Houses by Name</span>
      <input
        placeholder="Search House"
        type="search"
        v-model.trim="searchTerm"
      />
    </label>
    <List class="w-fit">
      <div
        class="px-4 py-2 shadow-md bg-slate-200 shadow-slate-200"
        v-for="house in filteredHouses"
        key="{{ house.slug }}"
      >
        <HouseItem :slug="house.slug">{{ house.name }}</HouseItem>
      </div>
    </List>
  </MainLayout>
</template>
