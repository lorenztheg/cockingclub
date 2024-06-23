<script setup>
import { ref } from 'vue';
import edamamService from "@/client/services/edamamService";
edamamService.getRecipes().then((response) => {
  console.log(response.data);
});
</script>

<template>
  <div class="recipes">
    <h1>Recipes</h1>
    <p>Here are some recipes for you to try!</p>
  </div>

</template>

<style scoped>

</style>