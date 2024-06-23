import API from "@/client/services/API";

export default {
    getRecipes (query) {
        return API().get('recipes', {params: {query}});
    },
    getRecipe (id) {
        return API().get(`recipes/${id}`);
    },
    saveRecipe (recipe) {
        return API().post('recipes', recipe);
    },
    deleteRecipe (id) {
        return API().delete(`recipes/${id}`);
    },
    saveRecipeToMealPlan(recipe) {
        return API().post('mealPlan', recipe);
    }
}