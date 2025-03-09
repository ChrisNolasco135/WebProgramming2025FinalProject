<script setup lang="ts">
import { ref } from 'vue'

const showWarning = ref(true)

function closeWarning() {
  showWarning.value = false
}
</script>

<template>
  <div class ="container mb-1">
    <article v-if="showWarning" class="message is-danger">
      <div class="message-header">
        <p>Warning</p>
        <button class="delete" aria-label="delete" @click="closeWarning"></button>
      </div>
      <div class="message-body">
        This website is still in development. Some features are yet to be added.
      </div>
    </article>
  </div>
</template>

<style scoped>

</style>
