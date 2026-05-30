<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { EmissionLog, toCO2e } from '../interfaces/EmissionLog';
import EmissionForm from './EmissionForm.vue';
import FacilityCard from './FacilityCard.vue';
import GaugeMeter from '@/charts/GaugeMeter.vue';

export default defineComponent({
  name: 'CarbonDashboard',
  components: { EmissionForm, FacilityCard, GaugeMeter },
  setup() {
    //Historial
    const emissions = ref<EmissionLog[]>([
      { 
        id: 1, 
        facilityName: 'Planta Norte', 
        gasType: 'CO2', 
        value: 1200, 
        unit: 'm3',
        date: '2026-05-28' },
      { 
        id: 2, 
        facilityName: 'Planta Sur', 
        gasType: 'CH4', 
        value: 300, 
        unit: 'm3',
        date: '2026-05-28' 
      }
    ]);
    //Limites
    const legalLimit = 50000;
    const facilityLimit = 10000;
    //Total Global
    const totalCO2e = computed(() =>
      emissions.value.reduce((sum, log) => sum + toCO2e(log), 0)
    );
    //Plantas
    const facilities = computed(() => {
      const map: Record<string, number> = {};
      emissions.value.forEach(log => {
        const normalizedName = log.facilityName.trim();

        map[normalizedName] = (map[normalizedName] || 0) + toCO2e(log);
      });
      return Object.entries(map).map(([name, total]) => ({
        name,
        total
        })
      );
    });

    //Filtro activado/desactivado
     const showOnlyViolations = ref(false);
    //Filtro Infracción
    const violatingFacilities = computed(() =>
      facilities.value.filter(
        facility => facility.total > facilityLimit
      )
  );
    //Plantas a mostrar
    const displayedFacilities = computed(() =>
      showOnlyViolations.value
      ? violatingFacilities.value
      : facilities.value
    );
    
    //Agregar Emisión
    const addEmission = (log: EmissionLog) => {
      emissions.value.push({
        ...log,
        id: Date.now()
      });
    };
    return {
      emissions,
      legalLimit,
      facilityLimit,
      totalCO2e,
      facilities,
      violatingFacilities,
      showOnlyViolations,
      displayedFacilities,
      addEmission
    };
  }
});
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
    
    <!--Columna 1-->
    <section class="space-y-6">
      <!--Form-->
      <div class="industrial-card p-5">
        <h2 class="text-xl font-semibold mb-5">Registrar Emisión</h2>
        <EmissionForm @add-emission="addEmission"/>
      </div>
      <!--Prueba de carga de nueva planta
      <div class="industrial-card p-4">
        <h3 class="font-bold mb-2">Debug</h3>

        <pre>{{ emissions }}</pre>
      </div> -->

      <!--Alertas-->
      <div class="industrial-card p-5">
        <h2 class="text-lg font-semibold mb-4 text-red-400">Plantas en infracción</h2>

        <div v-if="violatingFacilities.length === 0" class="text-green-400">No hay infracciones</div>
        <div v-for="facility in violatingFacilities"
        :key="facility.name"
        class="mb-3 rounded-lg bg-red-500/20 border border-red-500 p-3">
          <p class="font-semibold">{{ facility.name }}</p>
          <p>{{ facility.total.toFixed(2) }} t CO2e</p>
        </div>
      </div>
    </section>
    
    <!--
    <div class="industrial-card p-4">
      <h3 class="font-bold mb-2">Facilities</h3>
      <pre>{{ facilities }}</pre>
    </div> -->

    <!--Columna 2-->
    <section class="space-y-6">
      <!--Estado Global-->
      <div class="industrial-card p-5">
        <h2 class="text-lg font-semibold mb-4">Estado Global</h2>
       
          <div class="space-y-4">
            <div>
              <p class="text-gray-400 text-sm">Total CO2e</p>
              <h3 class="text-4xl font-bold text-cyan-400">{{ totalCO2e.toFixed(2) }} t </h3>
            </div>

            <div>
              <p class="text-gray-400 text-sm">Límite legal</p>
              <h3 class="text-2xl font-semibold">{{ legalLimit }} t </h3>
            </div>

            <div :class="totalCO2e > legalLimit 
                ? 'bg-red-500/20 text-red-400' 
                : 'bg-green-500/20 text-green-400'" class="inline-flex items-center gap-2 px-4 py-2 rounded-full">
              {{ totalCO2e > legalLimit ? 'En Infracción' : 'Cumple normativa' }}
            </div>
          </div>
      </div>
 
    <!--Filtro-->
    <div class="industrial-card p-4">
      <label class="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" v-model="showOnlyViolations" class="w-4 h-4">
        <span class="font-medium">Mostrar solo plantas en infracción</span>
      </label>
    </div>
    
    <!--Plantas-->
    <FacilityCard
      v-for="facility in displayedFacilities"
      :key="facility.name"
      :facility="facility"
      :limit="facilityLimit" />  
    </section>

    <!--Columna 3-->
    <section>
      <div class="industrial-card p-5">
        <h2 class="text-lg font-semibold mb-5 text-center">Medidor Global</h2>

        <GaugeMeter 
        :value="totalCO2e"
        :limit="legalLimit" />
      </div>
    </section>
  </div>
</template>