<script setup>
import { ref } from 'vue';
import AuthenticationService from "@/client/services/AuthenticationService";
import router from "@/client/router";


const email = ref('');
const password = ref('');
const errorMessages = ref('');

const register = async () => {
  try {
    const response = await AuthenticationService.register(email.value, password.value);
    console.log(response.data);
    await router.push('/');
  }
  catch (error) {
    errorMessages.value = 'Registration failed. Please try again.';
  }
};
</script>

<template>
  <div class="register-form" className="p-5 my-36">
    <h1 className="text-5xl font-bold mb-5">Cooking Club</h1>
    <form @submit.prevent="register">
      <div>
        <input className="mb-0.5 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" id="email" v-model="email" placeholder="E-Mail" type="text">
      </div>
      <div>
        <input className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" id="password" v-model="password" placeholder="Password" type="password">
      </div>
      <br>
      <button type="submit">Register</button>
      <button type="button" onclick="window.location.href='/'">Login</button>
    </form>
    <p>{{ errorMessages }}</p>
  </div>
</template>
