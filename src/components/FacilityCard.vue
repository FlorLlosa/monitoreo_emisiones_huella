<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import GaugeMeter from '@/charts/GaugeMeter.vue';

export default defineComponent({
  name: 'FacilityCard',
  components: { GaugeMeter },
  props: {
    facility: {
      type: Object as PropType<{ name: string; total: number }>,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  }
});
</script>

<template>
  <div
    :class="[
      'border rounded-2xl p-5 shadow-lg flex flex-col gap-4 transition',
      facility.total > limit
        ? 'border-red-500 bg-red-500/10'
        : 'border-cyan-500 bg-industrial-card'
      ]">
    <div>
      <h3 class="text-lg font-semibold mb-2">
        {{ facility.name }}
      </h3>
      <p>Total CO2e: {{ facility.total.toFixed(2) }} toneladas</p>
      <p class="mt-2"> Estado: <span :class="facility.total > limit ? 'text-red-400' : 'text-green-400'" class="font-bold">
        {{ facility.total > limit ? 'En Infracción' : 'Cumple' }} </span>
      </p>
    </div>
    <GaugeMeter 
      :value="facility.total"
      :limit="limit" />
  </div>
</template>