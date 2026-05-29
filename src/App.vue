<script lang="ts">
import { defineComponent } from 'vue';
import CarbonDashboard from './components/CarbonDashboard.vue';

export default defineComponent({
  name: 'App',
  components: { CarbonDashboard }
});
</script>


<template>
   <div class="min-h-screen bg-gray-100">
    <CarbonDashboard />
  </div>
</template>

<style scoped></style>
