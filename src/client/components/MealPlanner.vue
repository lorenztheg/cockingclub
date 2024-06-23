<script setup>
import { ref, onMounted } from 'vue';
import edamamService from "@/client/services/edamamService";
import HeadNavBarComponent from "@/client/components/HeadNavBarComponent.vue";

const savedRecipes = ref([]);

const fetchSavedRecipes = async () => {
  const response = await edamamService.getSavedRecipes();
  savedRecipes.value = response.data;
};

onMounted(fetchSavedRecipes);
</script>

<template>
  <HeadNavBarComponent />
  <div class="MealPlanner">
    <h2>Your Meal Plan</h2>
    <div v-if="savedRecipes.length">
      <div class="recipe-grid">
        <div v-for="recipe in savedRecipes" :key="recipe.uri" class="recipe-card">
          <img :src="recipe.image" alt="Recipe Image">
          <h3>{{ recipe.label }}</h3>
          <p>{{ recipe.source }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No recipes in your meal plan yet.</p>
    </div>
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
</style>