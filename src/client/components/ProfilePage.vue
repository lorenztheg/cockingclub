<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import AuthenticationService from "@/client/services/AuthenticationService"; // Importiere den AuthenticationService
import HeadNavBarComponent from "@/client/components/HeadNavBarComponent.vue";
import FooterComponent from '@/client/components/FooterComponent.vue';

const userEmail = ref('');
const loading = ref(true);
const route = useRoute();
const router = useRouter();
const deleteMessage = ref('');

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

const updateUser = () => {
  const userId = route.params.id;
  router.push({ name: 'UpdateProfile', params: { id: userId } }); // Redirect to update user page
};

const deleteUser = async () => {
  try {
    const userId = route.params.id;
    console.log(`Deleting user with ID: ${userId}`);
    const response = await AuthenticationService.deleteUser(userId);
    deleteMessage.value = 'Delete successful! Redirecting...'; // Sets the update message
    console.log(response.data);
    setTimeout(async () => { // Wait 3 secounds before redirecting
      await router.push('/');
    }, 3000);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
</script>

<template>
  <head-nav-bar-component />
  <div class="profile-page">
    <h2 class="text-2xl mt-2.5 font-bold">Profile Page</h2>
    <p class="text-xl m-2">Welcome to your profile page!</p>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Email: {{ userEmail }}</p>
      <button @click="logout">Logout</button> <!-- Füge den Logout-Button hinzu -->
      <button @click="updateUser">Update User</button>
      <button @click="deleteUser">Delete User</button>
    </div>
    <p>{{ deleteMessage }}</p>
  </div>
  <FooterComponent />
</template>

<style scoped>
button {
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 8px 2px 10px 2px;
}
</style>
