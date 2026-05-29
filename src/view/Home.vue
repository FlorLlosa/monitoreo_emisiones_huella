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

    const plants = [
      {
        name: 'Planta Norte',
        emissions: 1200,
        percentage: 12,
        status: 'Cumple'
      },
      {
        name: 'Planta Sur',
        emissions: 7500,
        percentage: 75,
        status: 'Cumple'
      }
    ];

    const reports = [
      {
        title: 'Reporte Diario',
        date: '29/05/2026'
      },
      {
        title: 'Reporte Semanal',
        date: '28/05/2026'
      },
      {
        title: 'Reporte Mensual',
        date: '01/05/2026'
      }
    ];

    return {
      currentView,
      plants,
      reports
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
          <button @click="currentView = 'dashboard'"class="w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition">Dashboard</button>
          <!-- PLANTAS -->
          <button @click="currentView = 'plants'"class="w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition">Plantas</button>
          <!-- REPORTES -->
          <button @click="currentView = 'reports'"class="w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition">Reportes</button>
        </nav>
        <!-- FOOTER -->
        <div class="mt-auto pt-6 text-sm text-gray-500"> EMS v1.0 </div>
      </aside>
      <!-- CONTENT -->
      <main class="flex-1 overflow-auto p-6">
        <!-- ================= DASHBOARD ================= -->
        <div v-if="currentView === 'dashboard'"class="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <!-- COLUMN 1 -->
          <section class="space-y-6">
            <div class="industrial-card p-5">
              <h2 class="text-xl font-semibold mb-5">
                Registrar Emisión
              </h2>
              <CarbonDashboard />
            </div>
          </section>
          <!-- COLUMN 2 -->
          <section class="space-y-6">
            <!-- GLOBAL -->
            <div class="industrial-card p-5">
              <h2 class="text-lg font-semibold mb-4">
                Estado Global
              </h2>
              <div class="space-y-4">
                <div>
                  <p class="text-gray-400 text-sm">
                    Total CO₂e
                  </p>
                  <h3 class="text-4xl font-bold text-cyan-400">8700 t </h3>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">
                    Límite legal
                  </p>
                  <h3 class="text-2xl font-semibold">
                    50000 t
                  </h3>
                </div>
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400">Cumple normativa</div>
              </div>
            </div>
            <!-- PLANTAS -->
            <div v-for="plant in plants":key="plant.name" class="industrial-card p-5">
              <h2 class="text-lg font-semibold mb-3">
                {{ plant.name }}
              </h2>
              <p class="text-gray-300">
                CO₂e: {{ plant.emissions }} toneladas
              </p>
              <div class="mt-4 h-3 rounded-full bg-industrial-dark overflow-hidden"><div class="h-full bg-cyan-400" :style="{ width: plant.percentage + '%' }"></div>
              </div>
            </div>
          </section>
          <!-- COLUMN 3 -->
          <section class="space-y-6">
            <!-- GAUGE -->
            <div class="industrial-card p-5 flex flex-col items-center">
              <h2 class="text-lg font-semibold mb-5">
                Medidor de emisiones
              </h2>
              <div class="w-52 h-52 rounded-full border-[14px] border-cyan-500 flex items-center justify-center">
                <div class="text-center">
                  <h3 class="text-4xl font-bold">
                    8700
                  </h3>
                  <p class="text-gray-400"> / 50000 t </p>
                </div>
              </div>
              <p class="mt-5 text-green-400 font-semibold">Estado óptimo </p>
            </div>
          </section>
        </div>
        <!-- ================= PLANTAS ================= -->
        <div v-else-if="currentView === 'plants'" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="plant in plants":key="plant.name" class="industrial-card p-6">
          <h2 class="text-xl font-semibold mb-4">
              {{ plant.name }}
            </h2>
            <p class="text-4xl font-bold text-cyan-400">
              {{ plant.emissions }} t
            </p>
            <p class="mt-4 text-green-400 font-semibold">
              {{ plant.status }}
            </p>
          </div>
        </div>
        <!-- ================= REPORTES ================= -->
        <div v-else-if="currentView === 'reports'" class="space-y-4">
          <div v-for="report in reports":key="report.title" class="industrial-card p-5 flex items-center justify-between"><div>
              <h2 class="text-lg font-semibold">
                {{ report.title }}
              </h2>
              <p class="text-gray-400">
                {{ report.date }}
              </p>
            </div>
            <button class="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition">Ver</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>