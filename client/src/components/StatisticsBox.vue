<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { getUsers } from '@/models/users'
import type { users } from '@/models/users'

const users = ref<users[]>([])
const selectedUserId = inject<number | null>('selectedUserId', null)

onMounted(() => {
  users.value = getUsers()
})
</script>

<template>
  <div>
    <div v-if="selectedUserId">
      <h2 class="title is-4">{{ selectedUserId }}</h2>
    </div>
    <div v-else>
      <p>No user selected</p>
    </div>
  </div>
</template>

<style scoped>

</style>
