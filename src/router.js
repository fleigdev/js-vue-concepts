import { createRouter, createWebHistory } from "vue-router";

import Expenses from './pages/Expenses.vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Pokedex from './pages/Pokedex.vue'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/expenses',
    component: Expenses
  },
  {
    path: '/pokedex',
    component: Pokedex
  },
]

const router = createRouter({
  history: createWebHistory(), // Use the history API for routing
  routes,
});

export default router;