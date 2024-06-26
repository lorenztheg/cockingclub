<script setup>
import HeadNavBarComponent from "@/client/components/HeadNavBarComponent.vue";
import { ref, onMounted } from 'vue';
import edamamService from "@/client/services/edamamService";
import FooterComponent from '@/client/components/FooterComponent.vue';
import RecipeDetailsModal from '@/client/components/RecipeDetailsModal.vue';
import {useToast} from "vue-toastification";

const savedRecipes = ref([]);
const showRecipeModal = ref(false);
const selectedRecipe = ref(null);
const toast = useToast();

const getSavedRecipes = async () => {
  try {
    const response = await edamamService.getSavedRecipes();
    savedRecipes.value = response.data;
  } catch (error) {
    console.error('Error getting saved recipes:', error);
  }
};

const removeRecipeFromPlan = async (recipeUri) => {
  try {
    await edamamService.removeRecipe(recipeUri);
    await getSavedRecipes(); // Refresh the list of saved recipes
    toast.success('Recipe removed from meal plan.')
  } catch (error) {
    console.error('Error removing recipe:', error);
    toast.error('Error removing recipe. Please try again.')
  }
};

const openRecipeDetails = (recipe) => {
  selectedRecipe.value = recipe;
  showRecipeModal.value = true;
};

const closeRecipeDetails = () => {
  showRecipeModal.value = false;
  selectedRecipe.value = null;
};

onMounted(getSavedRecipes);
</script>

<template>
  <div>
    <HeadNavBarComponent />
    <div class="MealPlanner">
      <h2>Your Meal Plan</h2>
      <div v-if="savedRecipes.length">
        <div class="recipe-grid">
          <div v-for="recipe in savedRecipes" :key="recipe.uri" class="recipe-card">
            <img :src="recipe.image" alt="Recipe Image">
            <h3>{{ recipe.label }}</h3>
            <p>{{ recipe.source }}</p>
            <button @click="openRecipeDetails(recipe)">Info</button> <!-- Button zum Anzeigen von Details -->
            <button @click="removeRecipeFromPlan(recipe.uri)">Remove</button> <!-- Button zum Entfernen -->
          </div>
        </div>
      </div>
      <div v-else>
        <p>No recipes in your meal plan yet.</p>
      </div>
    </div>
    <FooterComponent />

    <!-- Recipe Details Modal -->
    <RecipeDetailsModal v-if="showRecipeModal" :recipe="selectedRecipe" @close="closeRecipeDetails" />
  </div>
</template>

<style scoped>
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
}
.recipe-card img {
  width: 100%;
  height: auto;
}
button {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
}
</style>