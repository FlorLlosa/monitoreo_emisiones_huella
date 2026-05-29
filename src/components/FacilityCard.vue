<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FacilityCard',
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
  <div class="card">
    <h3 class="text-lg font-semibold mb-2">{{ facility.name }}</h3>
    <p>Total CO₂e: {{ facility.total.toFixed(2) }} toneladas</p>
    <p>
      Estado:
      <span :class="facility.total > limit ? 'card-alert' : 'text-alert-success font-bold'">
        {{ facility.total > limit ? 'En infracción' : 'Cumple' }}
      </span>
    </p>
  </div>
</template>