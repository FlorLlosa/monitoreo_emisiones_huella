<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/interfaces/User'

const router = useRouter()

const users: User[] = [
  { id: 1, name: 'Ana Gómez', email: 'ana@empresa.com', role: 'Administrador', active: true },
  { id: 2, name: 'Carlos Pérez', email: 'carlos@empresa.com', role: 'Supervisor', active: true },
  { id: 3, name: 'Laura Díaz', email: 'laura@empresa.com', role: 'Operador', active: false }
]

const selectedUserId = ref<number>(1)

const login = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="min-h-screen bg-industrial-medium text-industrial-light flex items-center justify-center p-6">
    <div class="industrial-card p-12 w-full max-w-2xl">

        <div class="text-center mb-9">
            <h2 class="text-3xl font-bold text-white">
                Carbon Monitoring System
            </h2>
                <p class="text-xl text-gray-400">
                    Industrial Emissions Dashboard
                </p>
        </div>

      <h1 class="text-4xl font-bold text-energy-accent mb-3">
        Iniciar sesión
      </h1>

      <p class="text-xl text-gray-400 mb-10">
        Selecciona un usuario para ingresar al sistema.
      </p>

      <label class="block text-2xl font-medium mb-2">
        Usuario
      </label>

      <select
        v-model.number="selectedUserId"
        class="w-full p-5 rounded-lg text-xl text-blue-900 mb-10"
      >
        <option
          v-for="user in users"
          :key="user.id"
          :value="user.id"
        >
          {{ user.name }} - {{ user.role }}
        </option>
      </select>

      <button
        @click="login"
        class="btn-primary w-full py-4 text-2xl font-semibold">
        Ingresar
      </button>
    </div>
  </div>
</template>