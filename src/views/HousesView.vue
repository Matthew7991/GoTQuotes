<script setup>
import { ref, watchEffect } from "vue"
import HouseItem from "../components/HouseItem.vue"
import List from "../components/List.vue"

const houses = ref([])
const searchTerm = ref("")
const filteredHouses = ref(houses.value)

watchEffect(() => {
  filteredHouses.value = houses.value.filter((house) =>
    house.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

async function getHouses() {
  try {
    const response = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/houses"
    )
    const data = await response.json()
    console.log(data)
    houses.value = data
  } catch (error) {
    console.error(error)
  }
}
getHouses()
</script>

<template>
  <input
    type="search"
    v-model.trim="searchTerm"
  />
  <List>
    <!-- <div class="flex flex-col gap-2"> -->
    <HouseItem
      v-for="house in filteredHouses"
      key="{{ house.slug }}"
      :slug="house.slug"
      >{{ house.name }}</HouseItem
    >
    <!-- </div> -->
  </List>
</template>
