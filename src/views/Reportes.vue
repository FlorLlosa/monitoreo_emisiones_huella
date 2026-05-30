<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'Reportes'
});
</script>

<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Reportes de Emisiones</h2>
        <p class="text-industrial-medium">Aquí podrás visualizar y exportar reportes históricos de emisiones por planta y globales.</p>
        <button class="btn-primary mt-3">Generar reporte PDF</button>
    </div>
</template>