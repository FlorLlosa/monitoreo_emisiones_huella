<script lang="ts">
import { defineComponent } from 'vue';
import CarbonDashboard from './CarbonDashboard.vue';

export default defineComponent({
  name: 'Home',
  components: { CarbonDashboard }
});
</script>

<template>
  <div class="min-h-screen bg-industrial-medium text-industrial-light">
    <!-- Navbar -->
    <header class="bg-industrial-dark p-4 shadow-md">
      <h1 class="text-xl font-bold text-energy-accent">Monitoreo de Emisiones</h1>
    </header>

    <!-- Contenido -->
    <main class="p-6">
      <CarbonDashboard />
    </main>
  </div>
</template>