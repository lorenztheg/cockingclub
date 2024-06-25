<script setup>
import { ref } from 'vue';
import AuthenticationService from "@/client/services/AuthenticationService";
import router from "@/client/router";
import {useRoute} from 'vue-router';


const email = ref('');
const password = ref('');
const errorMessages = ref('');
const updateMessage = ref('');
const route = useRoute();

const update = async () => {
  try {
    const UserId = route.params.id;
    const response = await AuthenticationService.updateUser(UserId, email.value, password.value);
    updateMessage.value = 'Update successful! Redirecting...'; // Sets the update message
    console.log(response.data);
    setTimeout(async () => { // Wait 3 secounds before redirecting
      await router.push('/dashboard');
    }, 3000);
  }
  catch (error) {
    errorMessages.value = 'Update failed. Please try again.';
  }
};


</script>

<template>
  <div class="update-form" className="p-5 my-36">
    <h1 className="text-5xl font-bold mb-5">Cooking Club</h1>
    <br>
    <h2 className="text-2xl font-bold mb-5">Update User</h2>
    <form @submit.prevent="update">
      <div>
        <input className="mb-0.5 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" id="email" v-model="email" placeholder="E-Mail" type="text">
      </div>
      <div>
        <input className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" id="password" v-model="password" placeholder="Password" type="password">
      </div>
      <br>
      <button type="submit">Update</button>
      <button type="button" onclick="window.location.href='/'">To Login</button>
    </form>
    <p>{{ errorMessages }}</p>
    <p>{{ updateMessage }}</p>
  </div>
</template>

<style scoped>

</style>