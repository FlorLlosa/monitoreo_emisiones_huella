<script lang="ts">
import { defineComponent, ref } from 'vue';
import { EmissionLog } from '@/interfaces/EmissionLog';

export default defineComponent({
  name: 'EmissionForm',
  emits: ['add-emission'],
  setup(_, { emit }) {
    const facilityName = ref('');
    const gasType = ref<'CO2' | 'CH4' | 'NOx'>('CO2');
    const value = ref(0);
    const date = ref('');

    const handleSubmit = () => {
      if (value.value < 0) return;
      const newLog: EmissionLog = {
        id: Date.now(),
        facilityName: facilityName.value,
        gasType: gasType.value,
        value: value.value,
        date: date.value
      };
      emit('add-emission', newLog);

      facilityName.value = '';
      gasType.value = 'CO2';
      value.value = 0;
      date.value = '';
    };

    return {
      facilityName,
      gasType,
      value,
      date,
      handleSubmit
    };
  }
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="card">
    <h2 class="text-lg font-semibold mb-4">Registrar nueva emisión</h2>

    <!-- Nombre de la planta -->
    <div class="mb-3">
      <label class="block text-sm font-medium">Planta</label>
      <input
        v-model="facilityName"
        type="text"
        class="mt-1 block w-full border rounded p-2"
        required
      />
    </div>

    <!-- Tipo de gas -->
    <div class="mb-3">
      <label class="block text-sm font-medium">Tipo de gas</label>
      <select
        v-model="gasType"
        class="mt-1 block w-full border rounded p-2"
        required
      >
        <option value="CO2">CO₂</option>
        <option value="CH4">Metano (CH₄)</option>
        <option value="NOx">Óxidos de Nitrógeno (NOx)</option>
      </select>
    </div>

    <!-- Valor en m³ -->
    <div class="mb-3">
      <label class="block text-sm font-medium">Cantidad (m³)</label>
      <input
        v-model.number="value"
        type="number"
        min="0"
        class="mt-1 block w-full border rounded p-2"
        required
      />
      <p v-if="value < 0" class="text-alert-danger text-sm">No se permiten valores negativos</p>
    </div>

    <!-- Fecha -->
    <div class="mb-3">
      <label class="block text-sm font-medium">Fecha</label>
      <input
        v-model="date"
        type="date"
        class="mt-1 block w-full border rounded p-2"
        required
      />
    </div>

    <!-- Botón -->
    <button type="submit" class="btn-primary">
      Agregar emisión
    </button>
  </form>
</template>