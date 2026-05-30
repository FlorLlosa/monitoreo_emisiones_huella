<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/interfaces/User'

const router = useRouter()

const name = ref('')
const email = ref('')
const role = ref<User['role']>('Operador')
const active = ref(true)

const errorMessage = ref('')

const handleSubmit = () => {
  if (!name.value.trim() || !email.value.trim()) {
    errorMessage.value = 'Todos los campos son obligatorios.'
    return
  }

  if (!email.value.includes('@')) {
    errorMessage.value = 'El email debe tener un formato válido.'
    return
  }

  const newUser: User = {
    id: Date.now(),
    name: name.value,
    email: email.value,
    role: role.value,
    active: active.value
  }

  console.log('Usuario creado:', newUser)

  router.push('/users')
}
</script>

<template>
  <div class="industrial-card p-6 max-w-2xl">
    <h1 class="text-2xl font-bold text-energy-accent mb-6">
      Crear Usuario
    </h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">
          Nombre completo
        </label>
        <input
          v-model="name"
          type="text"
          class="w-full p-3 rounded-lg text-blue-900"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          v-model="email"
          type="email"
          class="w-full p-3 rounded-lg text-blue-900"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">
          Rol
        </label>
        <select
          v-model="role"
          class="w-full p-3 rounded-lg text-blue-900"
        >
          <option value="Administrador">Administrador</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Operador">Operador</option>
        </select>
      </div>

      <label class="flex items-center gap-2">
        <input type="checkbox" v-model="active" />
        Usuario activo
      </label>

      <p v-if="errorMessage" class="text-red-400">
        {{ errorMessage }}
      </p>

      <button type="submit" class="btn-primary">
        Guardar usuario
      </button>
    </form>
  </div>
</template>