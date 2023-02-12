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
        <form @submit.prevent="registerHandler">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="userInformation.name" type="text" class="form-control" id="name" >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input v-model="userInformation.email" type="email" class="form-control" id="email" >
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="userInformation.password" type="password" class="form-control" id="password" >
          </div>
          <div class="mb-3">
            <label for="c_password" class="form-label">Confirm Password</label>
            <input v-model="userInformation.c_password" type="password" class="form-control" id="c_password" >
          </div>
          <button :disabled="fetchFlag" class="btn btn-primary">
            <template v-if="fetchFlag">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span class="visually-hidden">Loading...</span>
            </template>
            <template v-else>
              Register
            </template>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {registerHandler,userInformation,errors,fetchFlag}=useRegister()
definePageMeta({middleware:'guest'})
</script>

<style scoped>

</style>