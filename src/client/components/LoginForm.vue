<script setup>

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
    </form>
  </div>
</template>

<style scoped>

</style>