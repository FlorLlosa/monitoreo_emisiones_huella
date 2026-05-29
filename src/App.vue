<script lang="ts">
import { defineComponent } from 'vue';
import CarbonDashboard from './components/CarbonDashboard.vue';

export default defineComponent({
  name: 'App',
  components: { CarbonDashboard }
});
</script>

<template>
  <!-- Contenedor raíz con fondo industrial -->
  <div class="min-h-screen bg-industrial-medium text-industrial-light">
    <!-- Navbar simple -->
    <header class="bg-industrial-dark p-4 shadow-md">
      <h1 class="text-xl font-bold text-energy-accent">Monitoreo de Emisiones</h1>
    </header>

    <!-- Contenido principal -->
    <main class="p-6">
      <CarbonDashboard />
    </main>
  </div>
</template>

<style scoped></style>