<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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

      <div class="flex items-center gap-3">
        <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span class="text-sm text-green-400 font-semibold">
          Sistema Online
        </span>
      </div>
    </header>

    <div class="flex h-[calc(100vh-64px)]">
      <!-- SIDEBAR -->
      <aside class="w-64 bg-industrial-dark border-r border-industrial-border p-5 hidden lg:flex flex-col">
        <h2 class="text-lg font-semibold mb-6 text-energy-accent">
          Panel de Control
        </h2>

        <nav class="space-y-3">
          <RouterLink
            to="/dashboard"
            class="block w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition"
          >
            Dashboard
          </RouterLink>

          <RouterLink
            to="/users"
            class="block w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition"
          >
            Usuarios
          </RouterLink>

          <RouterLink
            to="/reportes"
            class="block w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition"
          >
            Reportes
          </RouterLink>

          <RouterLink
            to="/configuracion"
            class="block w-full text-left px-4 py-3 rounded-lg bg-industrial-card hover:bg-industrial-hover transition"
          >
            Configuración
          </RouterLink>
        </nav>

        <div class="mt-auto pt-6 text-sm text-gray-500">
          EMS v1.0
        </div>
      </aside>

      <!-- CONTENT -->
      <main class="flex-1 overflow-auto p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>