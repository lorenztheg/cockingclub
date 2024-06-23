<script setup>
import { ref, onMounted } from 'vue';
import edamamService from "@/client/services/edamamService";

const query = ref('');
const health = ref('');
const diet = ref('');
const recipes = ref([]);

const searchRecipes = async () => {
  const response = await edamamService.getRecipes(query.value, health.value, diet.value);
  recipes.value = response.data.hits;
};

onMounted(searchRecipes);
</script>

<template>
  <div class="recipe-search">
    <h2>Search Recipes</h2>
    <form @submit.prevent="searchRecipes">
      <label for="query">Query:</label>
      <input id="query" v-model="query" type="text">
      <label for="health">Health:</label>
      <input id="health" v-model="health" type="text">
      <label for="diet">Diet:</label>
      <input id="diet" v-model="diet" type="text">
      <button type="submit">Search</button>
    </form>
    <div v-if="recipes.length">
      <h2>Recipes</h2>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.recipe.uri">
          {{ recipe.recipe.label }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No recipes found.</p>
    </div>
  </div>
</template>

<style scoped>

</style>