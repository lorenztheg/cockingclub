<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'; // Importiere Vuex
import {useToast} from 'vue-toastification';
import AuthenticationService from "@/client/services/AuthenticationService";
import router from "@/client/router";

const email = ref('');
const password = ref('');
const store = useStore(); // Verwende Vuex Store
const toast = useToast();

const login = async () => {
  try {
    const response = await AuthenticationService.login(email.value, password.value);
    console.log(response.data);
    // Speichere die Benutzer-ID im Store
    await store.dispatch('login', response.data.user);
    toast.success('Login successful! Redirecting...')
    setTimeout(async () => { // Wait 3 secounds before redirecting
      await router.push('/dashboard');
    }, 1500);
  } catch (error) {
    toast.error('Login failed. Please try again.');
    console.error('Error logging in:', error);
  }
};
</script>

<template>
  <div class="login-form" className="p-5 my-36">
    <h1 className="text-5xl font-bold mb-5">Cooking Club</h1>
    <form @submit.prevent="login">
      <div>
        <input className="mb-0.5 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" id="email" v-model="email" placeholder="E-Mail" type="text">
      </div>
      <div>
        <input className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" id="password" v-model="password" placeholder="Password" type="password">
      </div>
      <br>
      <button type="submit">Login</button>
      <button type="button" onclick="window.location.href='/register'">Register</button>
    </form>
    <p>{{ errorMessages }}</p>
  </div>
</template>

<style scoped>

</style>