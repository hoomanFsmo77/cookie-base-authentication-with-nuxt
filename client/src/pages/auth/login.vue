<template>
  <div class="container mt-5">
    <div class="row justify-content-center" v-if="errors.length>0">
      <div class="col-5">
        <div class="card">
          <div class="card-body bg-danger bg-opacity-10">
            <ul class="d-flex flex-column  m-0">
              <li v-for="error in errors">
                <p class="m-0">{{error}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5">
        <form @submit.prevent="loginHandler">
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input v-model="userInformation.email" type="email" class="form-control" id="email" >
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="userInformation.password" type="password" class="form-control" id="password" >
          </div>
          <button :disabled="fetchFlag" class="btn btn-primary">
            <template v-if="fetchFlag">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span class="visually-hidden">Loading...</span>
            </template>
            <template v-else>
              Log in
            </template>
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const {loginHandler,userInformation,fetchFlag,errors}=useLogin()
definePageMeta({middleware:'guest'})

</script>

<style scoped>

</style>