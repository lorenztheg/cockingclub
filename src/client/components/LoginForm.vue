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
  <div class="login-form" className="p-5 my-36">
    <h1 className="text-5xl font-bold mb-5">Cooking Club</h1>
    <form @submit.prevent="login">
      <div>
        <input className="mb-0.5" id="email" v-model="email" placeholder="E-Mail" type="text">
      </div>
      <div>
        <input id="password" v-model="password" placeholder="Password" type="password">
      </div>
      <br>
      <button type="submit">Login</button>
      <button type="button" onclick="window.location.href='/register'">Register</button>
    </form>
  </div>
</template>

<style scoped>

</style>