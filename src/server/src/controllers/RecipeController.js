const { Recipe } = require('../models');

module.exports = {
    async saveRecipe(req, res) {
        try {
            const { uri, label, image, source } = req.body.recipe;
            const userId = req.userId;
            const recipe = await Recipe.create({ uri, label, image, source, userId });
            res.send(recipe);
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while saving the recipe: ' + error });
        }
    },
    async getSavedRecipes(req, res) {
        try {
            const userId = req.userId;
            const savedRecipes = await Recipe.findAll({ where: { userId } });
            res.send(savedRecipes);
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while fetching saved recipes: ' + error });
        }
    },
    async removeRecipe(req, res) {
        try {
            const { uri } = req.params;
            await Recipe.destroy({ where: { uri, userId: req.userId } });
            res.send({ message: 'Recipe removed successfully' });
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while removing the recipe'+error });
        }
    }
};
