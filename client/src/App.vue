<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <div class="container body-container">
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: aliceblue;
}

.body-container {
  background-color: white;
  padding: 2rem;
  min-height: 100vh;
}
</style>
