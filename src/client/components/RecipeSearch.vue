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
    <h2 class="text-l">Search your Recipes:</h2>
    <form @submit.prevent="searchRecipes">
      <label for="query">Your Query: </label>
      <input id="query" v-model="query" type="text" placeholder="Query">
      <label for="health">Your Health Search: </label>
      <input id="health" v-model="health" type="text" placeholder="Health">
      <label for="diet">Your Diet: </label>
      <input id="diet" v-model="diet" type="text" placeholder="Diet">
      <br>
      <button class="mt-1" type="submit">Start Cooking</button>
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
 button {
   background-color: black;
   border: none;
   color: white;
   padding: 15px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin: 4px 2px;
   cursor: pointer;
 }
 input {
   padding: 10px;
   margin: 10px;
 }
</style>