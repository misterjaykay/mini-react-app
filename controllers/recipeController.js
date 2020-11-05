const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  getAllRecipes: function (req, res) {
    db.Recipe.find({})
      .then((data) => res.json(data))
      .catch((err) => console.log("getAllRecipes Error Message: ", err));
  },
  saveRecipe: function (req, res) {
    console.log('body', req.body);
    db.Recipe.create(req.body)
    .then((data) => {
      console.log('This recipe has been created on your database', data);
      res.json(data)
    })
    .catch((err) => {
      console.log("saveRecipe Error Message: ", err);
    })
  }
};
