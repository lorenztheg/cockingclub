<script setup>
import RecipeSearch from "@/client/components/RecipeSearch.vue";
import FooterComponent from '@/client/components/FooterComponent.vue';
import HeadNavBarComponent from '@/client/components/HeadNavBarComponent.vue';
</script>

<template>
  <HeadNavBarComponent />
  <div class="user-dashboard">
    <h1 class="mt-16 text-5xl font-bold">Meals</h1>
    <p class="text-2xl m-2">Welcome to the Cooking Club dashboard!</p>
  </div>
  <div>
    <RecipeSearch />
  </div>
  <FooterComponent />
</template>

<style scoped>

</style>