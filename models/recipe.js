const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipe: {
        type: String,
        required: true
    },
    ingredient: [
        {
            type: String
        }
    ],
    direction: [
        {
            type: String
        }
    ],
    image: {
        type: String,
        default: "https://via.placeholder.com/500"
    },
    cuisine: {
        type: String
    },
    category: [
        {
            type: String
        }
    ]
})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;