<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { getUsers } from '@/models/users'
import type { users } from '@/models/users'

const users = ref<users[]>([])

onMounted(() => {
  users.value = getUsers()
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
          <p class="subtitle is-6 has-text-black">Total Admins: {{ users.filter(user => user.isAdmin).length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
