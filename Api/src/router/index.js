// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AllCars from '../components/AllCars.vue'
import CarDetails from '../components/CarDetails.vue'

const routes = [
  { path: '/', component: AllCars }, 
  { path: '/cars/:id', name: 'CarDetails', component: CarDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
