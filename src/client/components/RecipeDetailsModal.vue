<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <button class="close-button" @click="close">X</button>
      <div v-if="recipe && recipe.label">
        <h2>{{ recipe.label }}</h2>
        <img :src="recipe.image" alt="Recipe Image" />
        <p><strong>Source:</strong> {{ recipe.source }}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li v-for="ingredient in recipe.ingredientLines" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <a :href="recipe.url" target="_blank">View full instructions</a>
      </div>
      <div v-else>
        <p>No recipe details available.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  recipe: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(['close']);

const close = () => {
  emits('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;
}
</style>
