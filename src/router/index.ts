import { createRouter, createWebHistory } from 'vue-router'
//Importación de las vistas principales
import Home from '@/view/Home.vue'
import CarbonDashboard from '@/components/CarbonDashboard.vue'
import Reportes from '@/view/Reportes.vue'
import Configuracion from '@/view/Configuracion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: CarbonDashboard
  },
  {
    path: '/reportes',
    name: 'Reportes',
    component: Reportes
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: Configuracion
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router