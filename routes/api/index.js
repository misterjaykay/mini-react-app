const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/recipes")
    .get(recipeController.getAllRecipes);

router.route("/save")
    .post(recipeController.saveRecipe);
    
module.exports = router;
