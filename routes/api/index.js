const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const authController = require("../../controllers/authController");

// match "/api/recipes"
router.route("/recipes")
    .get(recipeController.getAllRecipes);

// match "/api/save"
router.route("/save")
    .post(recipeController.saveRecipe);

// match "/api/login"
router.route("/login")
    .post(authController.logInPost);

// match "/api/signup"
router.route("/signup")
    .post(authController.signUpPost);
    
module.exports = router;
