const AuthenticationController = require('./controllers/AuthenticationController');
const EdamamController = require('./controllers/apis/edamam');

module.exports= (app) => {

    app.post('/register',
        AuthenticationController.register
    );

    app.post('/login',
        AuthenticationController.login
    );

    app.get('/recipes',
        EdamamController.getRecipes
    );

    app.get('/nutrients',
        EdamamController.getNutrients
    );

}