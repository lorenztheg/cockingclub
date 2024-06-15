<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
  // Handle login logic here
  console.log('Username:', username.value);
  console.log('Password:', password.value);
};
</script>

<template>
  <div class = "login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Login</button>
      <button type="register">Register</button>
    </form>
  </div>
</template>

<style scoped>

</style>