<script lang="ts">
import { defineComponent, ref } from 'vue';
import CarbonDashboard from '@/components/CarbonDashboard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CarbonDashboard
  },
  setup() {
    const currentView = ref('dashboard');

    return {
      currentView
    };
  }
});
</script>

<template>
  <div class="min-h-screen bg-industrial-medium text-industrial-light">
    <!-- HEADER -->
    <header class="h-16 bg-industrial-dark border-b border-industrial-border flex items-center justify-between px-6 shadow-lg">
      <div>
        <h1 class="text-2xl font-bold text-energy-accent">
          Carbon Monitoring System
        </h1>
        <p class="text-sm text-gray-400">
          Industrial Emissions Dashboard
        </p>
      </div>
      <!-- STATUS -->
      <div class="flex items-center gap-3">
        <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span class="text-sm text-green-400 font-semibold">
          Sistema Online
        </span>
      </div>
    </header>
    <!-- MAIN LAYOUT -->
    <div class="flex h-[calc(100vh-64px)]">
      <!-- SIDEBAR -->
      <aside class="w-64 bg-industrial-dark border-r border-industrial-border p-5 hidden lg:flex flex-col">
        <h2 class="text-lg font-semibold mb-6 text-energy-accent">Panel de Control</h2>
        <nav class="space-y-3">
          <!-- DASHBOARD -->
          <button @click="currentView = 'dashboard'" class="w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition">Dashboard</button>
          <!-- PLANTAS -->
          <button @click="currentView = 'plants'" class="w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition">Plantas</button>
          <!-- REPORTES -->
          <button @click="currentView = 'reports'" class="w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition">Reportes</button>
        </nav>
        <!-- FOOTER -->
        <div class="mt-auto pt-6 text-sm text-gray-500"> EMS v1.0 </div>
      </aside>
      <!-- CONTENT -->
      <main class="flex-1 overflow-auto p-6">

        <!-- Dashboard -->
        <CarbonDashboard v-if="currentView === 'dashboard'" />
        <!-- Plantas -->
        <div v-else-if="currentView === 'plants'" class="industrial-card p-6">
          <h2 class="text-2xl font-bold text-energy-accent mb-4">Plantas Registradas</h2>  
          <p class="text-gray-300">Listado de Plantas.</p>
        </div>
        <!--Reportes-->
        <div v-else-if= "currentView === 'reports'" class="industrial-card p-6">
          <h2 class="text-2xl font-bold text-energy-accent mb-4">Reportes</h2>
          <p class="text-gray-300">Módulo preparado para exportación PDF</p>

          <button class="mt-4 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700">Descargar PDF</button>
        </div>

      </main>
    </div>
  </div>
</template>