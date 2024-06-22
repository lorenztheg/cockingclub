<script setup>
import { ref } from 'vue';
import AuthenticationService from "@/client/services/AuthenticationService";
import router from "@/client/router";


const email = ref('');
const password = ref('');

const register = async () => {
  const response = await AuthenticationService.register(email.value, password.value);
  console.log(response.data);
  await router.push('/');
};
</script>

<template>
  <div class="register-form">
    <h1>Cooking Club</h1>
    <form @submit.prevent="register">
      <div>
        <input id="email" v-model="email" placeholder="email" type="text">
      </div>
      <br>
      <div>
        <input id="password" v-model="password" placeholder="password" type="password">
      </div>
      <br>
      <button type="submit">Register</button>
      <p>You do already have an account? <router-link to="/">Login here</router-link></p>
    </form>
  </div>
</template>
