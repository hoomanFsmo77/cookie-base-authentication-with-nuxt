<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item active">Profile</li>
          <li class="list-group-item ">Name: {{userData?.name}}</li>
          <li class="list-group-item ">Email: {{userData?.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Login_Response} from "~/composables/useTypes";
const userData=useState<Login_Response['user']|null>('userInfo',()=>null)
definePageMeta({middleware:'auth'})
</script>

<style scoped>

</style>