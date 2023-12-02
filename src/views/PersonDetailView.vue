<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import HouseItem from "../components/HouseItem.vue"
import MainLayout from "../components/MainLayout.vue"
import { getGoTData } from "../utils/getGoTData.js"

const { slug } = useRoute().params
const person = ref({})
const quote = ref("")

person.value = await getGoTData("character", slug)

watch(
  person.value,
  () => {
    console.log("watching")
    getRandomQuote(person.value.quotes)
  },
  { immediate: true }
)

function getRandomQuote(quotes) {
  console.log(quotes)
  if (!quotes) {
    return
  }
  const filteredQuotes = quotes.filter((item) => item !== quote.value)
  console.log(filteredQuotes)
  const index = Math.floor(Math.random() * filteredQuotes.length)
  quote.value = filteredQuotes[index]
}
</script>

<template>
  <MainLayout>
    <div class="mb-2">
      <h1 class="mb-4 text-4xl font-bold text-slate-700">{{ person.name }}</h1>

      <HouseItem :slug="person.house?.slug">{{ person.house?.name }}</HouseItem>
    </div>
    <div class="flex items-center gap-4 mb-2">
      <h2 class="text-2xl font-bold text-slate-700">
        {{ person.quotes > 1 ? "Quotes" : "Quote" }} ({{
          person.quotes?.indexOf(quote) + 1
        }}/{{ person.quotes?.length }})
      </h2>
      <button
        class="px-4 py-1 font-medium border rounded-full bg-slate-300 border-slate-700"
        type="button"
        @click="getRandomQuote(person.quotes)"
      >
        Random Quote
      </button>
    </div>
    <p>{{ quote }}</p>
  </MainLayout>
</template>
