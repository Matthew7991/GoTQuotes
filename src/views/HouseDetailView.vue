<script setup>
import { ref } from "vue"
import PersonItem from "../components/PersonItem.vue"
import { useRoute } from "vue-router"
import List from "../components/List.vue"
import MainLayout from "../components/MainLayout.vue"
import { getGoTData } from "../utils/getGoTData.js"

const { slug } = useRoute().params
console.log(slug)
const house = ref({})

house.value = await getGoTData("house", slug)
</script>

<template>
  <MainLayout>
    <h1 class="mb-4 text-4xl font-bold text-slate-700">{{ house.name }}</h1>
    <div>
      <h2 class="mb-2 text-2xl font-bold text-slate-700">Members</h2>
      <List>
        <div
          class="px-4 py-2 shadow-md bg-slate-200 shadow-slate-200"
          v-for="member in house.members"
          key="{{ member.slug }}"
        >
          <PersonItem
            :slug="member.slug"
            :house="house.name"
            >{{ member.name }}</PersonItem
          >
        </div>
      </List>
    </div>
  </MainLayout>
</template>
