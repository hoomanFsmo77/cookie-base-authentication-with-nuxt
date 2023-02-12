<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col-12">
        <h3>Posts</h3>
      </div>
    </div>
    <div class="row g-2" v-if="fetchFlag">
      <div v-for="item in posts" class="col-4">
        <div class="card">
          <div class="card-header">
            <p>{{item.title}}</p>
          </div>
          <div class="card-body">
            <p>{{item.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {usePosts} from "~/composables/usePosts";
definePageMeta({middleware:'auth'})
const {posts,fetchFlag}=usePosts() as any
</script>

<style scoped>

</style>