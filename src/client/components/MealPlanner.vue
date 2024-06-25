<script setup>
import HeadNavBarComponent from "@/client/components/HeadNavBarComponent.vue";
import { ref, onMounted } from 'vue';
import edamamService from "@/client/services/edamamService";
import FooterComponent from '@/client/components/FooterComponent.vue';

const savedRecipes = ref([]);

const getSavedRecipes = async () => {
  try {
    const response = await edamamService.getSavedRecipes();
    savedRecipes.value = response.data;
  } catch (error) {
    console.error('Error getting saved recipes:', error);
  }
};

const saveRecipeToPlan = async (recipe) => {
  try {
    await edamamService.saveRecipe(recipe);
    await getSavedRecipes(); // Aktualisieren Sie die gespeicherten Rezepte
  } catch (error) {
    console.error('Error saving recipe:', error);
  }
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
            <button @click="saveRecipeToPlan(recipe)">Add to Plan</button> <!-- Button zum Speichern -->
          </div>
        </div>
      </div>
      <div v-else>
        <p>No recipes in your meal plan yet.</p>
      </div>
    </div>
  </div>
  <FooterComponent />
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
</style>