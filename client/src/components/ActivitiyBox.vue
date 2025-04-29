<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { refSession } from '@/models/session';
import type { User } from '@/models/users';
import { getAllUsers, getImageUrl } from '@/models/users';
import type { Activity } from '@/models/activities';
import { getAllActivities } from '@/models/activities';

const users = ref<User[]>([]);
const activities = ref<Activity[]>([]);

function getUserActivities(userId: number): Activity[] {
  return activities.value.filter(activity => activity.userId === userId);
}

getAllUsers().then((response) => {
    users.value = response.items
})



const session = refSession();

function closeWorkout(userId: number) {
  users.value = users.value.filter(user => user.id !== userId);
}


</script>

<template>
  <div>
    <section>
      <article v-for="user in users" :key="user.id" class="media">
        <div>
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="getImageUrl" alt="User Image" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="has-text-black">
                <strong class="has-text-black">{{ user.firstName + ' ' + user.lastName }}</strong> <small>@{{ (user.firstName + user.lastName).toLowerCase().replace(' ', '') }}</small>
                <br />
                <span v-for="activity in getUserActivities(user.id)" :key="activity.id" class="has-text-black">
                  <span class="has-text-black">Type: {{ activity.type }}</span>
                  <br />
                  <small>{{ activity.type }}</small>
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
