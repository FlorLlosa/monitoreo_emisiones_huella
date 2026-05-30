<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'GaugeMeter',
  props: {
    value: { type: Number, required: true },
    limit: { type: Number, required: true }
  },
  setup(props) {
    const percentage = computed(() => Math.min((props.value / props.limit) * 100, 100));
    const percentageText = computed(() =>
      percentage.value.toFixed(1));
    return { percentage, percentageText };
  }
});
</script>

<template>
  <div class="card flex flex-col items-center">
    <h3 class="text-lg font-semibold mb-2">Medidor de emisiones</h3>
    <svg viewBox="0 0 36 36" class="w-44 h-44 -rotate-90">
      <path
        class="text-industrial-light"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="text-energy-accent"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
        :stroke-dasharray="`${percentage}, 100`"
        transform="rotate(-90 18 18)"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <p class="text-2xl font-bold text-cyan-400">{{ percentageText }}%</p>
    <p class="mt-2 font-bold">{{ value }} / {{ limit }} toneladas</p>
  </div>
</template>