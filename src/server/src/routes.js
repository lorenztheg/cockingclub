const AuthenticationController = require('./controllers/AuthenticationController');
const EdamamController = require('./controllers/apis/edamam');
const UserController = require('./controllers/UserController');
const AuthMiddleware = require('./middleware/auth');
const RecipeController = require('./controllers/RecipeController');

module.exports= (app) => {

    app.post('/register',
        AuthenticationController.register
    );

    app.post('/login',
        AuthenticationController.login
    );
    app.post('/logout',
        AuthenticationController.logout
    );
    app.get('/recipes',
        EdamamController.getRecipes
    );

    app.get('/nutrients',
        EdamamController.getNutrients
    );
    app.get('/user/:userId',
        AuthMiddleware,
        UserController.getUserById
    );
    app.get('/planner', (req, res) => {
        res.send({ message: 'Planner data' });
    });
    app.get('/recipes/saved',
        AuthMiddleware,
        RecipeController.getSavedRecipes
    );
    app.post('/recipes/save',
        AuthMiddleware,
        RecipeController.saveRecipe
    );
    app.put('/update/:userId',
        UserController.updateUser
    );
}