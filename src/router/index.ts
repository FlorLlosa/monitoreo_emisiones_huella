import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CarbonDashboard from '@/components/CarbonDashboard.vue'

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
    component: () => import('@/components/Reportes.vue') // futuro componente
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import('@/components/Configuracion.vue') // futuro componente
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router