<script setup>
import { RouterLink } from "vue-router"
import GoTLogo from "./svgs/GoTLogo.vue"
</script>

<template>
  <header class="flex items-center px-8 py-4 bg-slate-300">
    <GoTLogo />
    <nav class="flex gap-4 ml-auto text-2xl font-semibold underline">
      <RouterLink
        activeClass="text-red-500"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        activeClass="text-red-500"
        to="/houses"
        >Houses</RouterLink
      >
      <RouterLink
        activeClass="text-red-500"
        to="/persons"
        >Persons</RouterLink
      >
      <RouterLink
        activeClass="text-red-500"
        to="/quotes"
        >Quotes</RouterLink
      >
    </nav>
  </header>
</template>
