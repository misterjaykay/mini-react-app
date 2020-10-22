const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingreident: [
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
        type: String
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