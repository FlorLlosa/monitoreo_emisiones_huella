<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Configuracion'
});
</script>

<template>
    <div class="card">
        <h2 class="text-xl font-bold mb-4">Configuración del Sistema</h2>
        <p class="text-industrial-medium">
            Ajusta los límites legales, parámetros de plantas y preferencias de visualización.
        </p>

        <form class="mt-4 space-y-3">
            <div>
                <label class="block text-sm font-medium">Límite legal (toneladas)</label>
                <input type="number" class="mt-1 block w-full border rounded p-2" />
            </div>
            <div>
                <label class="block text-sm font-medium">Límite por planta (toneladas)</label>
                <input type="number" class="mt-1 block w-full border rounded p-2" />
            </div>
            <button type="submit" class="btn-primary">Guardar cambios</button>
        </form>
    </div>

</template>