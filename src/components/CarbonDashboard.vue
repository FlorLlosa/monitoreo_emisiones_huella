<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { EmissionLog, toCO2e } from '@/interfaces/EmissionLog.ts';
import EmissionForm from './EmissionForm.vue';
import FacilityCard from './FacilityCard.vue';

export default defineComponent({
  name: 'CarbonDashboard',
  components: { EmissionForm, FacilityCard },
  setup() {
    const emissions = ref<EmissionLog[]>([
      { id: 1, facilityName: 'Planta Norte', gasType: 'CO2', value: 1200, date: '2026-05-28' },
      { id: 2, facilityName: 'Planta Sur', gasType: 'CH4', value: 300, date: '2026-05-28' }
    ]);

    const legalLimit = 50000;
    const facilityLimit = 10000;

    const totalCO2e = computed(() =>
      emissions.value.reduce((sum, log) => sum + toCO2e(log), 0)
    );

    const facilities = computed(() => {
      const map: Record<string, number> = {};
      emissions.value.forEach(log => {
        map[log.facilityName] = (map[log.facilityName] || 0) + toCO2e(log);
      });
      return Object.entries(map).map(([name, total]) => ({
        name,
        total
      }));
    });

    const addEmission = (log: EmissionLog) => {
      emissions.value.push({ ...log, id: emissions.value.length + 1 });
    };

    return {
      emissions,
      legalLimit,
      facilityLimit,
      totalCO2e,
      facilities,
      addEmission
    };
  }
});
</script>

<template>
  <div class="p-6">
    <!-- Título -->
    <h1 class="text-2xl font-bold mb-4">Carbon Dashboard</h1>

    <!-- Formulario de ingreso -->
    <EmissionForm @add-emission="addEmission" />

    <!-- Métricas globales -->
    <div class="card mt-6">
      <p class="font-semibold">Total CO₂e: {{ totalCO2e.toFixed(2) }} toneladas</p>
      <p class="font-semibold">Límite legal: {{ legalLimit }} toneladas</p>
      <p :class="totalCO2e > legalLimit ? 'card-alert' : 'text-alert-success font-bold'">
        Estado: {{ totalCO2e > legalLimit ? 'En infracción' : 'Cumple' }}
      </p>
    </div>

    <!-- Tarjetas por planta -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <FacilityCard
        v-for="facility in facilities"
        :key="facility.name"
        :facility="facility"
        :limit="facilityLimit"
      />
    </div>

    <!-- Botón de acción -->
    <div class="mt-6">
      <button class="btn-primary">Ver reporte completo</button>
    </div>
  </div>
</template>