<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

// Verwende Vuex, um die Benutzer-ID aus dem Zustand zu holen
const store = useStore();
const router = useRouter();

const userId = computed(() => store.state.user.id); // Annahme: Die Benutzer-ID wird im Vuex-Store gespeichert

const goToDashboard = () => {
  router.push('/dashboard').catch(err => console.error(err));
};

const goToPlanner = () => {
  router.push('/planner').catch(err => console.error(err));
};

const goToProfile = () => {
  if (userId.value) {
    router.push(`/profile/${userId.value}`).catch(err => console.error(err));
  } else {
    // Handle the case where user ID is not available
    console.error('User ID is not available');
  }
};
</script>

<template>
  <nav class="h-20 flex justify-between items-center p-3">
    <div>
      <h4 class="text-xl font-bold">Cooking Club</h4>
    </div>
    <div>
      <ul class="flex space-x-4">
        <li><a @click="goToDashboard" class="text-blue-500 hover:text-blue-700">Meals</a></li>
        <li><a @click="goToPlanner" class="text-blue-500 hover:text-blue-700">Planner</a></li>
        <li><a @click="goToProfile" class="text-blue-500 hover:text-blue-700">Profile</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #c1cdcd;
}
</style>
