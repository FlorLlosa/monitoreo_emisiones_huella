<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { User } from '@/interfaces/User'

const users = ref<User[]>([
  {
    id: 1,
    name: 'Ana Gómez',
    email: 'ana@empresa.com',
    role: 'Administrador',
    active: true
  },
  {
    id: 2,
    name: 'Carlos Pérez',
    email: 'carlos@empresa.com',
    role: 'Supervisor',
    active: true
  },
  {
    id: 3,
    name: 'Laura Díaz',
    email: 'laura@empresa.com',
    role: 'Operador',
    active: false
  }
])
</script>

<template>
  <div class="industrial-card p-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-energy-accent">
        Gestión de Usuarios
      </h1>
      <RouterLink
        to="/users/create"
        class="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white">
        Nuevo Usuario
      </RouterLink>
    </div>

    <table class="w-full text-left">
      <thead>
        <tr class="border-b border-gray-600">
          <th class="p-3">ID</th>
          <th class="p-3">Nombre</th>
          <th class="p-3">Email</th>
          <th class="p-3">Rol</th>
          <th class="p-3">Estado</th>
          <th class="p-3">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-b border-gray-700">
          <td class="p-3">{{ user.id }}</td>
          <td class="p-3">{{ user.name }}</td>
          <td class="p-3">{{ user.email }}</td>
          <td class="p-3">{{ user.role }}</td>
          <td class="p-3">
            <span :class="user.active ? 'text-green-400' : 'text-red-400'">
              {{ user.active ? 'Activo' : 'Inactivo' }}
            </span>
          </td>
          <td class="p-3 flex gap-2">
            <RouterLink
              :to="`/users/${user.id}`"
              class="px-3 py-1 rounded bg-slate-600 hover:bg-slate-500">
              Ver
            </RouterLink>

            <RouterLink
              :to="`/users/${user.id}/edit`"
              class="px-3 py-1 rounded bg-cyan-600 hover:bg-cyan-700">
              Editar
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>