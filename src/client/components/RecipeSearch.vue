<script setup>
import { ref, onMounted } from 'vue';
import edamamService from "@/client/services/edamamService";
import RecipeDetailsModal from "@/client/components/RecipeDetailsModal.vue";
import { useToast } from "vue-toastification";

const query = ref('');
const health = ref('');
const diet = ref('');
const recipes = ref([]);
const error = ref(null);
const toast = useToast();

const showRecipeModal = ref(false);
const selectedRecipe = ref(null);

const searchRecipes = async () => {
  try {
    const response = await edamamService.getRecipes(query.value);
    recipes.value = response.data.hits;
  } catch (err) {
    error.value = 'Error fetching recipes';
  }
};

const saveRecipeToPlan = async (recipe) => {
  try {
    await edamamService.saveRecipe(recipe);
    console.log('Recipe saved successfully');
    toast.success('Recipe saved successfully');
  } catch (error) {
    console.error('Error saving recipe:', error);
    toast.error('Error saving recipe');
  }
};

const openRecipeDetails = (recipe) => {
  if (recipe) {
    selectedRecipe.value = recipe;
    showRecipeModal.value = true;
  } else {
    console.error('No recipe selected.');
  }
};

const closeRecipeDetails = () => {
  showRecipeModal.value = false;
  selectedRecipe.value = null;
};

onMounted(searchRecipes);
</script>

<template>
  <div class="recipe-search pb-16">
    <h2 class="text-l">Search your Recipes:</h2>
    <form @submit.prevent="searchRecipes">
      <label for="query">Your Query: </label>
      <input id="query" v-model="query" type="text" placeholder="Query" class="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <label for="health">Your Health Search: </label>
      <input id="health" v-model="health" type="text" placeholder="Health" class="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <label for="diet">Your Diet: </label>
      <input id="diet" v-model="diet" type="text" placeholder="Diet" class="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <br>
      <br>
      <button class="mt-1" type="submit">Start Cooking</button>
    </form>
    <div v-if="error">{{ error }}</div>
    <div v-if="recipes.length">
      <h2 class="text-xl m-2 p-2">Your Results</h2>
      <div class="recipe-grid m-10" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="recipe in recipes" :key="recipe.recipe.uri" class="recipe-card">
          <img :src="recipe.recipe.image" alt="Recipe Image">
          <div class="recipe-details">
            <h3>{{ recipe.recipe.label }}</h3>
            <button @click="saveRecipeToPlan(recipe.recipe)">Add to Plan</button>
            <button @click="openRecipeDetails(recipe.recipe)">Info</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No recipes found.</p>
    </div>
    <RecipeDetailsModal v-if="showRecipeModal" :recipe="selectedRecipe" @close="closeRecipeDetails" />
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
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.recipe-card {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%
}
.recipe-card img {
  width: 100%;
  height: auto;
}
.recipe-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>