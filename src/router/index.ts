import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import CarbonDashboard from '@/components/CarbonDashboard.vue'
import Reportes from '@/views/Reportes.vue'
import Configuracion from '@/views/Configuracion.vue'

import UserList from '@/views/users/UserList.vue'
import UserCreate from '@/views/users/UserCreate.vue'
import UserDetail from '@/views/users/UserDetail.vue'
import UserEdit from '@/views/users/UserEdit.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: CarbonDashboard
      },
      {
        path: 'reportes',
        name: 'Reportes',
        component: Reportes
      },
      {
        path: 'configuracion',
        name: 'Configuracion',
        component: Configuracion
      },
      {
        path: 'users',
        name: 'UserList',
        component: UserList
      },
      {
        path: 'users/create',
        name: 'UserCreate',
        component: UserCreate
      },
      {
        path: 'users/:id',
        name: 'UserDetail',
        component: UserDetail
      },
      {
        path: 'users/:id/edit',
        name: 'UserEdit',
        component: UserEdit
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router