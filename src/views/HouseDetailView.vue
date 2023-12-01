<script setup>
import { ref } from "vue"
import PersonItem from "../components/PersonItem.vue"
import { useRoute } from "vue-router"
import List from "../components/List.vue"

const { slug } = useRoute().params
console.log(slug)
const house = ref({})

async function getHouseDetails() {
  try {
    const response = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/house/" + slug
    )
    const data = await response.json()
    house.value = data[0]
  } catch (error) {
    console.error(error)
  }
}
getHouseDetails()
</script>

<template>
  <h1>{{ house.name }}</h1>
  <div>
    <h2>Members</h2>
    <List>
      <PersonItem
        v-for="member in house.members"
        key="{{ member.slug }}"
        :slug="member.slug"
        >{{ member.name }}</PersonItem
      >
    </List>
  </div>
</template>
