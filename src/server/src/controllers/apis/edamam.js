require('dotenv').config({path:'.env'});
const axios = require('axios');



const getRecipes = async (req, res) => {
    const { query } = req.query;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.RECIPE_API_ID}&app_key=${process.env.RECIPE_API_KEY}`;
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getNutrients = async (req, res) => {
    const { query } = req.query;
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${process.env.NUTRITION_API_ID}&app_key=${process.env.NUTRITION_API_KEY}&ingr=${query}`;
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getRecipes,
    getNutrients
}