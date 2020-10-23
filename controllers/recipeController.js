const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  getAllRecipes: function (req, res) {
    db.Recipe.find({})
      .then((data) => res.json(data))
      .catch((err) => console.log("getAllRecipes Error Message: ", err));
  },
};
