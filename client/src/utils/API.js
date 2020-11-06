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
        return axios.post("/api/save", newRecipe)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },

    userSignUp: function(userInfo) {
        return axios.post("/api/signup", userInfo)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },

    userLogIn: function(userInfo) {
        return axios.post("/api/login", userInfo)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
    },

    
}