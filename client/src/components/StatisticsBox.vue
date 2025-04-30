<script setup lang="ts">
import { ref } from 'vue'
import { getAllUsers } from '@/models/users'
import type { User } from '@/models/users'

const users = ref<User[]>([])

getAllUsers()
  .then((response) => {
    users.value = Array.isArray(response) ? response : []
  })

</script>

<template>
  <div>
    <div class="columns is-multiline">
      <!-- Total Users -->
      <div class="column">
        <div class="box has-background-info">
          <h2 class="title is-4">Users</h2>
          <p class="subtitle is-6 has-text-black">Total Users: {{ users.length }}</p>
        </div>
      </div>

      <!-- Total Admins -->
      <div class="column">
        <div class="box has-background-info">
          <h2 class="title is-4">Admins</h2>
          <p class="subtitle is-6 has-text-black">Total Admins: {{ users.filter(user => user.role === 'admin').length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
