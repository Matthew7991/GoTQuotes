import { createRouter, createWebHistory } from "vue-router"
import HousesView from "../views/HousesView.vue"
import HouseDetailView from "../views/HouseDetailView.vue"
import PersonsView from "../views/PersonsView.vue"
import PersonDetailView from "../views/PersonDetailView.vue"
import QuotesView from "../views/QuotesView.vue"
import MainView from "../views/MainView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
      // redirect: { path: "/houses" },
    },
    {
      path: "/houses",
      name: "houses",
      component: HousesView,
    },
    {
      path: "/houses/:slug",
      name: "house",
      component: HouseDetailView,
    },
    {
      path: "/persons",
      name: "persons",
      component: PersonsView,
    },
    {
      path: "/persons/:slug",
      name: "person",
      component: PersonDetailView,
    },
    {
      path: "/quotes",
      name: "quotes",
      component: QuotesView,
    },
  ],
})

export default router
