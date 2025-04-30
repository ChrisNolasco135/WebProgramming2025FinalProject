<script setup lang="ts">
  import { ref } from 'vue';
  import type { Route } from '@/models/routes';
  import { getAllRoutes } from '@/models/routes';
  import { isAdmin } from '@/models/session';

  const routes = ref<Route[]>([]);

  getAllRoutes().then((response) => {
    routes.value = Array.isArray(response) ? response : [response];
  });

  function closeRoute(routeId: number) {
    routes.value = routes.value.filter(route => route.id !== routeId);
  }

  // Assign colors based on difficulty
  function getBoxColor(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'has-background-success';
      case 'moderate':
        return 'has-background-warning';
      case 'extreme':
        return 'has-background-link';
      default:
        return 'has-background-light';
    }
  }
</script>

<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-3 has-text-centered has-text-black">Available Routes</h1>
      <div class="columns is-multiline">
        <!-- Loop through routes -->
        <div v-for="route in routes" :key="route.id" class="column is-4">
          <div :class="['box', getBoxColor(route.difficulty)]">
            <h2 class="title is-5">{{ route.name }}</h2>
            <p class="has-text-black"><strong>Name:</strong> {{ route.name }}</p>
            <p class="has-text-black"><strong>Description:</strong> {{ route.description }}</p>
            <p class="has-text-black"><strong>Distance:</strong> {{ route.distance }} km</p>
            <p class="has-text-black"><strong>Start Location:</strong> {{ route.startLocation }}</p>
            <p class="has-text-black"><strong>End Location:</strong> {{ route.endLocation }}</p>
            <p class="has-text-black"><strong>Difficulty:</strong> {{ route.difficulty }}</p>
            <br>
            <button
              class="button is-danger"
              @click="closeRoute(route.id)"
              :disabled="!isAdmin()">
              Remove
            </button>
            <button class="button is-primary ml-1" @click=""
            :disabled="!isAdmin()">
          Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-top: 2rem;
}

.box {
  padding: 1.5rem;
  border-radius: 8px;
}

.columns {
  margin-top: 1rem;
}

.button {
  margin-top: 1rem;
}
</style>
