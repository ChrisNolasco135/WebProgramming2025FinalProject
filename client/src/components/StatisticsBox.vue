<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { getAllUsers } from '@/models/users'
import type { User } from '@/models/users'
import { isAdmin } from '@/models/session'

const users = ref<User[]>([])

getAllUsers().then((response) => {
    users.value = response.items
})

</script>

<template>
  <div>
    <div class="columns is-multiline">
      <div class="column">
        <div class="box has-background-info">
          <h2 class="title is-4">Users</h2>
          <p class="subtitle is-6 has-text-black">Total Users: {{ users.length }}</p>
        </div>
      </div>
      <div class="column">
        <div class="box has-background-info">
          <h2 class="title is-4">Admins</h2>
          <p class="subtitle is-6 has-text-black">Total Admins: {{ users.filter(user => isAdmin).length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
