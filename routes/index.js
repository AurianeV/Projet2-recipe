const express = require("express");
const router = express.Router();
// const router = require("express").Router();

//premiere route- Home page
router.get("/home", (request, response, next) => {
  response.render("index");
});

// 4ème route - sear-recipe
router.get("/search-recipe", (request, response, next) => {
  response.render("search-recipe");
});
// 4ème route - sear-recipe
router.post("/search-recipe", (request, response, next) => {
  const {crit, crit} = request.body
  Recipe.find({crit, crit})
  .then(myRecipes => {
     response.render("recipes", myRecipes)
  })
});


// 5eme route - les recettes
router.get("/recipes", (request, response, next) => {
  Recipe.find({})
  .then(myRecipes => {
     response.render("recipes", myRecipes)
  })
  
});

//6ème route - recette choisie
router.get("/recipe_id", (request, response, next) => {
  response.render("recipe_id");
});

module.exports = router;
