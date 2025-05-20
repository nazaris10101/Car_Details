// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import CarDetails from '@/components/CarDetails.vue'

const routes = [
  {
    path: '/',
    redirect: () => {
      // Отримання ID останнього переглянутого авто з localStorage
      const lastViewedCarId = localStorage.getItem('lastViewedCarId');
      // Якщо є, редирект на нього, інакше на дефолтне авто
      return lastViewedCarId ? `/cars/${lastViewedCarId}` : '/cars/67f51cc3e2671ffdd1a93624';
    }
  },
  {
    path: '/cars/:carId',
    name: 'CarDetails',
    component: CarDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router