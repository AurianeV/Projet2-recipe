const express = require("express");
const router = express.Router();

const Recipe = require("../model/Recipe");
// const router = require("express").Router();

//premiere route- Home page
router.get("/home", (request, response, next) => {
  response.render("index");
});

// route - sear-recipe
router.get("/search-recipe", (request, response, next) => {
  response.render("search-recipe");
});

// 4ème route - sear-recipe
router.post("/search-recipe", (request, response, next) => {
  console.log("coucou", request.body) 

  /*
  Les recettes, courtes + faciles + (reconfortante OU saines)
  {
    duration: "1",
    difficulty: "easy",
    mood: {$in: ['comfort', 'healthy']},
    season: {$in: ['winter', 'autumn']}
  }
  */

  const filters = {}

  if (request.body.season) {
    // le user a choisi une ou plusieurs saisons
    filters.season = {$in: request.body.season }
  }

  if (request.body.duration) {
    // le user a choisi une duree
    filters.duration = request.body.duration // "1"
  }

  if (request.body.mood) {
    // le user a choisi une ou plusieurs saisons
    filters.mood = {$in: request.body.mood }
  }


  if (request.body.type) {
    // le user a choisi une ou plusieurs saisons
    filters.type = {$in: request.body.type}
  }

  if (request.body.difficulty) {
    // le user a choisi une ou plusieurs saisons
    filters.difficulty = request.body.difficulty
  }
  ingredients = request.body.ingredient.filter( ingredientToFilter => {
    if(ingredientToFilter){
      return ingredientToFilter
    }
  })
  if (ingredients.length !== 0) {
    // le user a choisi une ou plusieurs saisons

    filters.ingredient = {$in: ingredients }
  }
console.log(filters)
  Recipe.find(filters)
  .then(myRecipes => {
    console.log("recipes", myRecipes)
  response.render("recipes", {myRecipes})
  })
  .catch(error => {
    console.log(error)
    next(error);
  })
});


// 5eme route - les recettes
router.get("/recipes", (request, response, next) => {
  if(!require.sessions.currentUser){
    response.redirect('/login')
  }
  Recipe.find({}) 
  .then(myRecipes => {
     response.render("recipes", {myRecipes})
  })
  
});

//6ème route - recette choisie
router.get("/recipe_id", (request, response, next) => {
  response.render("recipe_id");
});

module.exports = router;
