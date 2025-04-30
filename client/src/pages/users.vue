<script setup lang="ts">
import UsersBox from '@/components/UsersBox.vue';
import StatisticsBox from '@/components/StatisticsBox.vue';
</script>

<template>
  <div>
    <h1 class="title has-text-black">Users</h1>
    <StatisticsBox/>
    <br/>
    <p class="has-background-success mb-2 pb-2 pt-2 has-text-black"><br/></p>
    <UsersBox/>
  </div>
</template>

<style scoped>

</style>
