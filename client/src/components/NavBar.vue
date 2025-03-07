<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)

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


                    <RouterLink to="/" class="navbar-item">Home</RouterLink>
                    <RouterLink to="/MyStatistics" class="navbar-item">MyStatistics</RouterLink>
                    <RouterLink to="/about" class="navbar-item">About</RouterLink>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item is-selected">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                            <div class="dropdown is-hoverable">
                              <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                  <span>Users</span>
                                    <span class="icon is-small">
                                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                              <div class="dropdown-content">
                                <a href="#" class="dropdown-item"> User 1 </a>
                                <a href="#" class="dropdown-item"> User 2 </a>
                                <a href="#" class="dropdown-item"> User 3 </a>
                                <a href="#" class="dropdown-item"> Admin </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item"> Add User </a>
                              </div>
                            </div>
                        </div>
                        <div>
                            <button class="button is-primary">
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
