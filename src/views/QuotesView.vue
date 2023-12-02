<script setup>
import { ref } from "vue"
import List from "../components/List.vue"
import PersonItem from "../components/PersonItem.vue"
import MainLayout from "../components/MainLayout.vue"
import { getGoTData } from "../utils/getGoTData.js"

const quotes = ref([])

async function getQuotes() {
  quotes.value = await getGoTData("random", "5")
}
getQuotes()
</script>

<template>
  <MainLayout>
    <div class="flex items-center gap-4 mb-4">
      <h1 class="text-4xl font-bold text-slate-700">Quotes</h1>
      <button
        class="px-4 border rounded-full py-1font-medium bg-slate-300 border-slate-700"
        type="button"
        @click="getQuotes"
      >
        Ranomize Quotes
      </button>
    </div>
    <List v-if="quotes">
      <div
        v-for="{ sentence, character } in quotes"
        class="px-4 py-2 shadow-md bg-slate-200 shadow-slate-200"
      >
        <p>{{ sentence }}</p>
        <PersonItem
          key="{{ character.slug }}"
          :slug="character.slug"
          :house="character.house"
          >{{ character.name }}</PersonItem
        >
      </div>
    </List>
  </MainLayout>
</template>
