<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { isAdmin, isLoggedIn } from '@/models/session';
import UsersBox from '@/components/UsersBox.vue';
import StatisticsBox from '@/components/StatisticsBox.vue';

const router = useRouter();

onMounted(() => {
  if (!isAdmin() || !isLoggedIn()) {
    alert('You do not have permission to view this page.');
    window.location.href = '/';
  }
});

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
