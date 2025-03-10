<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsers } from '@/models/users'
import type { users } from '@/models/users'
import { getWorkoutActivity, type WorkoutActivity } from '@/models/workout'

const usersArray = ref<users[]>([])
const WorkoutActivities = ref<WorkoutActivity[]>([])
const userImages = {
  1: new URL('@/assets/John Doe.svg', import.meta.url).href,
  2: new URL('@/assets/Jane Smith.svg', import.meta.url).href,
  3: new URL('@/assets/Alice Johnson.svg', import.meta.url).href,
}

onMounted(() => {
  usersArray.value = getUsers().filter(user => !user.isAdmin)
  WorkoutActivities.value = getWorkoutActivity()
})

function getUserActivities(userId: number) {
  return WorkoutActivities.value.filter(activity => activity.id === userId)
}

function closeWorkout(userId: number) {
  const user = usersArray.value.find(user => user.id === userId)
  if (user) {
    user.show = false
  }
}

</script>

<template>
  <div>
    <section>
      <article v-for="user in usersArray" :key="user.id" class="media">
        <div v-if="user.show">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="userImages[user.id]" alt="User Image" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="has-text-black">
                <strong class="has-text-black">{{ user.name }}</strong> <small>@{{ user.name.toLowerCase().replace(' ', '') }}</small>
                <br />
                <span v-for="activity in getUserActivities(user.id)" :key="user.id" class="has-text-black">
                  <span class="has-text-black">Type: {{ activity.type }}</span>
                  <br />
                  <small>{{ activity.description }}</small>
                  <br />
                  <span class="has-text-black">Calories Burned: {{ activity.caloriesBurned }}</span>
                  <br />
                  <span class="has-text-black">Duration: {{ activity.duration }} minutes</span>
                  <br />
                  <span class="has-text-black">Date: {{ activity.date }}</span>
                  <br />

                </span>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
                <div class="media-right">
                 <button class="delete" aria-label="delete" @click="() => closeWorkout(user.id)"></button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        </article>
    </section>
  </div>
</template>

<style scoped>

</style>
