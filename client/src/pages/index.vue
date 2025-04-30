<script setup lang="ts">
import DevelopmentMessage from '@/components/DevelopmentMessage.vue';
</script>

<template>
  <main class="section">
    <div class="container">

      <div class="has-text-centered mb-5">
        <h1 class="title is-2 has-text-black">Nolas Fitness Tracker</h1>
        <p class="subtitle is-5 has-text-grey">
          This is a fitness tracker made for the Web Programming Final Project
        </p>
      </div>
      <div class="box has-background-success">
        <p class="has-text-black">
          If you wish to access the <strong>Users</strong> table, log in as an admin user, and the <strong>Users</strong> tab will appear.
        </p>
      </div>
      <div class="columns is-centered">
        <div class="column is-half">
          <DevelopmentMessage />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Add custom styles if needed */
main {
  padding-top: 2rem;
}

.box {
  padding: 1.5rem;
  border-radius: 8px;
}

.strong {
  font-weight: bold;
  color: black;
}
</style>
