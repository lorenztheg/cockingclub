<script setup>
import { ref } from 'vue';
import AuthenticationService from "@/client/services/AuthenticationService";
import router from "@/client/router";

const email = ref('');
const password = ref('');

const login = async () => {
  const response = await AuthenticationService.login(email.value, password.value);
  console.log(response.data);
  await router.push('/dashboard');
};
</script>

<template>
  <div class="login-form">
    <h1>Cooking Club</h1>
    <form @submit.prevent="login">
      <div>
        <input id="email" v-model="email" placeholder="email" type="text">
      </div>
      <br>
      <div>
        <input id="password" v-model="password" placeholder="password" type="password">
      </div>
      <br>
      <button type="submit">Login</button>
      <p>Don't have an account yet? <router-link to="/register">Register here</router-link></p>
      <!-- For Testing Reasons -->
      <br><br>
      <p></p>
      <p></p>
    </form>
  </div>
</template>

<style scoped>

</style>