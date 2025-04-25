import { createRouter, createWebHistory } from 'vue-router'
import AllCars from '@/components/AllCars.vue'
import CarDetails from '@/components/CarDetails.vue'

const routes = [
  { path: '/', name: 'AllCars', component: AllCars },
  { path: '/cars/:carId', name: 'CarDetails', component: CarDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
