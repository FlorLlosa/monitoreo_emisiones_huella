<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import type { User } from '@/interfaces/User'

const route = useRoute()

const users: User[] = [
  { id: 1, name: 'Ana Gómez', email: 'ana@empresa.com', role: 'Administrador', active: true },
  { id: 2, name: 'Carlos Pérez', email: 'carlos@empresa.com', role: 'Supervisor', active: true },
  { id: 3, name: 'Laura Díaz', email: 'laura@empresa.com', role: 'Operador', active: false }
]

const userId = computed(() => Number(route.params.id))

const user = computed(() =>
  users.find((item) => item.id === userId.value)
)
</script>

<template>
  <div class="industrial-card p-6 max-w-2xl">
    <h1 class="text-2xl font-bold text-energy-accent mb-6">
      Detalle de Usuario
    </h1>

    <div v-if="user" class="space-y-3">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Rol:</strong> {{ user.role }}</p>

      <p>
        <strong>Estado:</strong>
        <span :class="user.active ? 'text-green-400' : 'text-red-400'">
          {{ user.active ? 'Activo' : 'Inactivo' }}
        </span>
      </p>

      <RouterLink
        :to="`/users/${user.id}/edit`"
        class="inline-block mt-4 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700"
      >
        Editar usuario
      </RouterLink>
    </div>

    <p v-else class="text-red-400">
      Usuario no encontrado.
    </p>
  </div>
</template>