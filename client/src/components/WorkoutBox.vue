<script setup lang="ts">
import { ref } from 'vue';
import type { users } from '@/models/users';


</script>

<template>
  <div class="columns">
    <div class="column">
      <p>First Column</p>
    </div>

    <div class="column">
      <section class="section">add workout</section>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p class = "has-text-black">
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
              magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
              sem. Etiam finibus odio quis feugiat facilisis.
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
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
    </div>

    <div class="column">
      <p>Third Column</p>
    </div>
  </div>

</template>

<style scoped>

</style>
