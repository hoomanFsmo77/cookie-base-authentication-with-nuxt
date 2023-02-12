<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <NuxtLink :to="{name:'index'}" class="navbar-brand" >Hooman.ir</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink :to="{name:'index'}" active-class="active" class="nav-link " aria-current="page" >Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="{name:'posts'}" active-class="active" class="nav-link " aria-current="page" >Posts</NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <template v-if="userData">
            <li class="nav-item">
              <NuxtLink :to="{name:'user-profile'}" active-class="active" class="nav-link " aria-current="page" >Profile</NuxtLink>
            </li>
            <li class="nav-item">
              <a @click="logoutHandler" href="#" class="nav-link " aria-current="page" >Log out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <NuxtLink :to="{name:'auth-register'}" active-class="active" class="nav-link " aria-current="page" >Register</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="{name:'auth-login'}" active-class="active" class="nav-link " aria-current="page" >Log in</NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>



</template>

<script setup lang="ts">
import {Login_Response} from "~/composables/useTypes";
const {logoutHandler}=useLogout()
const userData=useState<Login_Response['user']|null>('userInfo',()=>null)
</script>

<style scoped>

</style>