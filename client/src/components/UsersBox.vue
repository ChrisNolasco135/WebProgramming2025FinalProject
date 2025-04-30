<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/models/users'
import { getAllUsers, remove, update } from '@/models/users'

const users = ref<User[]>([])

getAllUsers()
  .then((response) => {
    users.value = Array.isArray(response) ? response : []
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
          <h2 class="title is-4">{{ user.firstName }} {{ user.lastName }}</h2>
          <p class="subtitle is-6 has-text-black"><strong>ID: {{ user.id }}</strong></p>
          <p class="has-text-black">Role: {{ user.role }}</p>
          <p class="has-text-black">Email: {{ user.email }}</p>
          <p class="has-text-black">Age: {{ user.age }}</p>
          <p class="has-text-black">Gender: {{ user.gender }}</p>
          <p class="has-text-black">Height: {{ user.height }} cm</p>
          <p class="has-text-black">Weight: {{ user.weight }} kg</p>
          <br>
          <button class="button is-danger" @click="remove(user.id)">Delete</button>
          <button class="button is-primary ml-1" @click="">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Add spacing between lines */
  max-width: 300px; /* Set a maximum width for the box */
  padding: 1rem; /* Optional: Add padding for better spacing inside the box */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.box p {
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for long text */
}

.box h2 {
  white-space: nowrap; /* Prevent title from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for long titles */
}
</style>
