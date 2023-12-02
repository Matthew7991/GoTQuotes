<script setup>
import { ref, watchEffect } from "vue"
import List from "../components/List.vue"
import PersonItem from "../components/PersonItem.vue"
import MainLayout from "../components/MainLayout.vue"
import { getGoTData } from "../utils/getGoTData.js"

const persons = ref([])
const searchTerm = ref("")
const filteredPersons = ref(persons.value)

persons.value = await getGoTData("characters")

watchEffect(() => {
  filteredPersons.value = persons.value.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>

<template>
  <MainLayout>
    <h1 class="mb-4 text-4xl font-bold text-slate-700">Persons</h1>
    <label class="block mb-2">
      <span class="sr-only">Search for Characters by Name</span>
      <input
        type="search"
        v-model.trim="searchTerm"
        placeholder="Search Name"
      />
    </label>
    <List class="grid grid-cols-2 w-fit">
      <div
        class="px-4 py-2 shadow-md bg-slate-200 shadow-slate-200"
        v-for="person in filteredPersons"
        key="{{ person.slug }}"
      >
        <PersonItem
          :slug="person.slug"
          :house="person.house"
          >{{ person.name }}</PersonItem
        >
      </div>
    </List>
  </MainLayout>
</template>
