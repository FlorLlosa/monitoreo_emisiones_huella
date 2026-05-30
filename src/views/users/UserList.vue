<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/interfaces/User'

const users = ref<User[]>([
  {
    id: 1,
    name: 'Anna Gómez',
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
    <h1 class="text-2xl font-bold text-energy-accent mb-6">
      Gestión de Usuarios
    </h1>

    <table class="w-full text-left">
      <thead>
        <tr class="border-b border-gray-600">
          <th class="p-3">ID</th>
          <th class="p-3">Nombre</th>
          <th class="p-3">Email</th>
          <th class="p-3">Rol</th>
          <th class="p-3">Estado</th>
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
            <span
              :class="user.active ? 'text-green-400' : 'text-red-400'">
              {{ user.active ? 'Activo' : 'Inactivo' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>