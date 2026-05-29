<script lang="ts">
import { defineComponent } from 'vue';
import CarbonDashboard from './CarbonDashboard.vue';

export default defineComponent({
  name: 'Home',
  components: { CarbonDashboard }
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-industrial-medium text-industrial-light">
    <!-- Navbar -->
    <header class="bg-industrial-dark p-4 shadow-md flex justify-between items-center">
      <h1 class="text-xl font-bold text-energy-accent">Monitoreo de Emisiones</h1>
      <nav class="flex gap-4">
        <a href="#" class="hover:text-energy-accent">Dashboard</a>
        <a href="#" class="hover:text-energy-accent">Reportes</a>
        <a href="#" class="hover:text-energy-accent">Configuración</a>
      </nav>
    </header>

    <!-- Layout principal -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-industrial-dark p-4 hidden md:block">
        <ul class="space-y-2">
          <li><a href="#" class="block p-2 rounded hover:bg-industrial-medium">Plantas</a></li>
          <li><a href="#" class="block p-2 rounded hover:bg-industrial-medium">Alertas</a></li>
          <li><a href="#" class="block p-2 rounded hover:bg-industrial-medium">Histórico</a></li>
        </ul>
      </aside>

      <!-- Contenido central -->
      <main class="flex-1 p-6">
        <CarbonDashboard />
      </main>
    </div>
  </div>
</template>