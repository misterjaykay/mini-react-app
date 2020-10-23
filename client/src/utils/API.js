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
    }
}