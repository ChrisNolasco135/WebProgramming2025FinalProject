<script setup lang="ts">
import ActivitiyBox from '@/components/ActivitiyBox.vue';

</script>

<template>
  <div class="columns">
    <div class="column">
      <h1 class="title is-1 has-text-black">Workouts</h1>
      <nav class="level">
        <div class="level-item has-text-centered has-text-black">
          <div>
            <p class="heading has-text-centered has-text-black">Tweets</p>
            <p class="title has-text-centered has-text-black">57</p>
          </div>
        </div>
        <div class="level-item has-text-centered ">
          <div>
            <p class="heading has-text-centered has-text-black">Following</p>
            <p class="title has-text-centered has-text-black">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-centered has-text-black">Followers</p>
            <p class="title has-text-centered has-text-black"> 43 </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-centered has-text-black">Likes</p>
            <p class="title has-text-centered has-text-black">12</p>
          </div>
        </div>
      </nav>
    </div>

    <div class="column">
      <p class="has-background-success mb-2 pb-2 pt-2 has-text-black has-text-centered">You're all up to date!</p>
      <ActivitiyBox/>
    </div>

    <div class="column">

    </div>
  </div>

</template>

<style scoped>

</style>
