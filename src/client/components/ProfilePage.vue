<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import AuthenticationService from "@/client/services/AuthenticationService"; // Importiere den AuthenticationService
import HeadNavBarComponent from "@/client/components/HeadNavBarComponent.vue";

const userEmail = ref('');
const loading = ref(true);
const route = useRoute();
const router = useRouter();

const logout = async () => {
  try {
    await AuthenticationService.logout();
    await router.push('/'); // Redirect to login page
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

onMounted(async () => {
  try {
    const userId = route.params.id; // Holt die Benutzer-ID aus der URL
    console.log(`Fetching data for user ID: ${userId}`);
    if (!userId) {
      console.error('No user ID found in route parameters.');
      return;
    }
    const response = await axios.get(`http://localhost:8085/user/${userId}`);
    console.log('User data fetched:', response.data);
    userEmail.value = response.data.email;
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    loading.value = false;
  }
});

const goToUpdateUser = () => {
  const userId = route.params.id;
  router.push({ name: 'UpdateProfile', params: { id: userId } }); // Redirect to update user page
};
</script>

<template>
  <head-nav-bar-component />
  <div class="profile-page">
    <h2 class="text-l">Profile Page</h2>
    <p class="text-2xl m-2">Welcome to your profile page!</p>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Email: {{ userEmail }}</p>
      <button @click="logout">Logout</button> <!-- Füge den Logout-Button hinzu -->
      <button @click="goToUpdateUser">Update User</button>
    </div>
  </div>
</template>

<style scoped>
button {
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 2px;
}
</style>
