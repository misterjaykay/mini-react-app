import axios from 'axios';

export default {
    getAllRecipes: function() {
        return axios.get("/api/recipes")
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },

    saveRecipe: function(newRecipe) {
        return axios.post("api/save", newRecipe)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    }
}