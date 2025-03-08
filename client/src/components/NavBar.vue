<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getUsers } from '@/models/users';
import type { users } from '@/models/users';
import { isAdmin } from '@/models/users';
import { getUserEmail } from '@/models/users';

const isActive = ref(false)
const users = ref<users[]>([])
const selectedUserId = ref<number | null>(null)
const selectedUserName = ref<String | null>(null)
const isAdminSelected = computed(() => selectedUserId.value !== null)

onMounted(() => {
  users.value = getUsers()
})

function selectUser(userId: number, userName: String) {
  selectedUserId.value = userId
  selectedUserName.value = userName
}



</script>

<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://github.com/ChrisNolasco135/WebProgramming2025FinalProject.git">
                    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                   :class="{ 'is-active': isActive }" @click="isActive = !isActive">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-start">
                    <RouterLink to="/" class="navbar-item">
                      <span>
                        <i class="fas fa-home"></i>
                      </span>
                      <span>Home</span>
                    </RouterLink>

                    <RouterLink to="/statistics" class="navbar-item">
                      <span>
                        <i class="fas fa-chart-line"></i>
                      </span>
                      <span>MyStatistics</span>
                    </RouterLink>

                    <RouterLink to="/social" class="navbar-item">
                      <span>
                        <i class="fas fa-users"></i>
                      </span>
                      <span>Friends</span>
                    </RouterLink>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a href=/about class="navbar-item">
                                About
                            </a>
                            <a href=/jobs class="navbar-item is-selected">
                                Jobs
                            </a>
                            <a href=/contact class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a href=/ class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                      <div>
                        <p>{{ selectedUserId !== null ? selectedUserName : 'Please Sign In' }}</p>
                      </div>
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span class = "icon is-small">
                                      <i class="fas fa-user-circle"></i>
                                    </span>
                                    <span>Users</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                                <div class="dropdown-content">
                                    <button v-for="user in users" :key="user.id" href="#" class="dropdown-item" @click="selectUser(user.id, user.name)">
                                        {{ user.name }}
                                    </button>
                                    <hr class="dropdown-divider" />
                                    <a href="#" class="dropdown-item"> Edit Users </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="button is-primary">
                              <span class="icon">
                              <i class="fab fa-twitter"></i>
                              </span>
                              <strong>Tweet</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>
