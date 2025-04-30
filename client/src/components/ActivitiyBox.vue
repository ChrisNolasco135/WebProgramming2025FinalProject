<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs'; // Import dayjs
import type { User } from '@/models/users';
import { getAllUsers, getImageUrl } from '@/models/users';
import type { Activity } from '@/models/activities';
import { getAllActivities, remove } from '@/models/activities';
import { isAdmin, refSession } from '@/models/session';

const users = ref<User[]>([]);
const activities = ref<Activity[]>([]);
const session = refSession();

getAllUsers().then((response) => {
  const allUsers = Array.isArray(response) ? response : [response];
  users.value = allUsers.filter(user => user.role.trim().toLowerCase() !== 'admin');
});

getAllActivities().then((response) => {
    activities.value = Array.isArray(response) ? response : [response];
});

function closeWorkout(activityId: number) {
  activities.value = activities.value.filter(activity => activity.id !== activityId);
}

function getUserActivities(userId: number): Activity[] {
  return activities.value.filter(activity => activity.userId === userId);
}


</script>

<template>
  <div>
    <section>
      <article v-for="user in users" :key="user.id" class="media">
        <div>
          <div class="media-content">
            <div class="content">
              <h3 class="title is-5 has-text-black">Activities for {{ user.firstName }} {{ user.lastName }}</h3>

                  <div v-if="getUserActivities(user.id).length > 0">
                    <div v-for="activity in getUserActivities(user.id)" :key="activity.id" class="box has-background-success">
                      <div class="user-info">
                        <div class="user-details">
                          <p class="has-text-black">
                            <strong class="has-text-black">{{ user.firstName + ' ' + user.lastName }}</strong>
                            <small>@{{ (user.firstName + user.lastName).toLowerCase().replace(' ', '') }}</small>
                          </p>
                        </div>
                        <figure class="media-right">
                          <p class="image is-64x64">
                            <img :src="getImageUrl(user)" alt="User Image" />
                          </p>
                        </figure>
                      </div>
                      <hr>
                      <p class="has-text-black"><strong>Type:</strong> {{ activity.type }}</p>
                      <p class="has-text-black"><strong>Calories Burned:</strong> {{ activity.caloriesBurned }}</p>
                      <p class="has-text-black"><strong>Duration:</strong> {{ activity.duration }} minutes</p>
                      <p class="has-text-black"><strong>Date:</strong> {{ dayjs(activity.date).format('MMMM D, YYYY') }}</p>
                      <hr>
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
                            <button
                              class="delete"
                              aria-label="delete"
                              @click="closeWorkout(activity.id)"
                              :disabled="!isAdmin() && session.user?.id !== activity.userId">
                            </button>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>

              <div v-else>
                <p>No activities found for this user.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  flex-direction: row-reverse; /* Reverse the order: icon on the right, name on the left */
  gap: 1rem; /* Add spacing between the name and the icon */
}

.media-right {
  flex-shrink: 0; /* Prevent the image from shrinking */
}

.user-details {
  flex-grow: 1; /* Allow the name to take up remaining space */
}
</style>
