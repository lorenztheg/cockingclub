<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
  // Handle login logic here
  console.log('Email:', email.value);
  console.log('Password:', password.value);
};

</script>

<template>
  <div class = "login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <input type="text" id="email" placeholder="email" v-model="email">
      </div>
      <br>
      <div>

        <input type="password" id="password" placeholder="password" v-model="password">
      </div>
      <button type="submit">Login</button>
      <button @click="register" type="submit">Register</button>
    </form>
  </div>
</template>

<style scoped>

</style>