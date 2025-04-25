import { createRouter, createWebHistory } from 'vue-router'
import AllCars from '../components/AllCars.vue'

const routes = [
  { path: '/', name: 'AllCars', component: AllCars }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router