import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Kontakt from '../components/Kontakt.vue'
import Rezerwacja from '../components/Rezerwacja.vue'
import ONas from '../components/O nas.vue'
import Samochody from '../components/Samochody.vue'
import CarDetails from '../components/CarDetails.vue' // 🆕 Імпортуємо сторінку деталей авто

const routes = [
  { path: '/', component: Home },
  { path: '/kontakt', component: Kontakt },
  { path: '/rezerwacja', component: Rezerwacja },
  { path: '/o-nas', component: ONas },
  { path: '/samochody', component: Samochody },
  { path: '/samochody/:id', component: CarDetails } // 🆕 Маршрут з параметром id
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
