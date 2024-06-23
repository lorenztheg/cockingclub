<script setup>
import RecipeSearch from "@/client/components/RecipeSearch.vue";
import FooterComponent from '@/client/components/FooterComponent.vue';
</script>

<template>
  <div class="user-dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to the Cooking Club dashboard!</p>
  </div>
  <div>
    <RecipeSearch />
  </div>
  <FooterComponent />
</template>

<style scoped>

</style>