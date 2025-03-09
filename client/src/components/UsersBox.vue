<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { users } from '@/models/users'
import { getUsers } from '@/models/users'

const users = ref<users[]>([])

onMounted(() => {
  users.value = getUsers()
})

function deleteUser(userId: number) {
  users.value = users.value.filter(user => user.id !== userId)
}
</script>

<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="user in users" :key="user.id" class="column">
        <div class="box has-background-info">
          <h2 class="title is-4">{{ user.name }}</h2>
          <p class="subtitle is-6 has-text-black">ID: {{ user.id }}</p>
          <p class="has-text-black">Name: {{ user.name }}</p>
          <p class="has-text-black">Email: {{ user.email }}</p>
          <p class="has-text-black">Admin: {{ user.isAdmin }}</p>
          <button class="button is-primary" @click="deleteUser(user.id)">Delete</button>
          <button class="button is-primary ml-1" @click="">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
