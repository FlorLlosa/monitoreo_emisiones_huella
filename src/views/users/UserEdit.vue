<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { User } from '@/interfaces/User'

const route = useRoute()
const router = useRouter()

const users: User[] = [
  { id: 1, name: 'Ana Gómez', email: 'ana@empresa.com', role: 'Administrador', active: true },
  { id: 2, name: 'Carlos Pérez', email: 'carlos@empresa.com', role: 'Supervisor', active: true },
  { id: 3, name: 'Laura Díaz', email: 'laura@empresa.com', role: 'Operador', active: false }
]

const userId = computed(() => Number(route.params.id))

const selectedUser = computed(() =>
  users.find((item) => item.id === userId.value)
)

const name = ref(selectedUser.value?.name ?? '')
const email = ref(selectedUser.value?.email ?? '')
const role = ref<User['role']>(selectedUser.value?.role ?? 'Operador')
const active = ref(selectedUser.value?.active ?? true)

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

  const updatedUser: User = {
    id: userId.value,
    name: name.value,
    email: email.value,
    role: role.value,
    active: active.value
  }

  console.log('Usuario editado:', updatedUser)

  router.push(`/users/${userId.value}`)
}
</script>

<template>
  <div class="industrial-card p-6 max-w-2xl">
    <h1 class="text-2xl font-bold text-energy-accent mb-6">
      Editar Usuario
    </h1>

    <form
      v-if="selectedUser"
      @submit.prevent="handleSubmit"
      class="space-y-4"
    >
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
        Guardar cambios
      </button>
    </form>

    <p v-else class="text-red-400">
      Usuario no encontrado.
    </p>
  </div>
</template>