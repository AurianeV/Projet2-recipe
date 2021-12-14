const express = require("express");
const router = express.Router();
// const router = require("express").Router();

//premiere route- Home page
router.get("/home", (request, response, next) => {
  response.render("index");
});
// deuxime route - sign up

// 3eme route - login
router.get("/login", (request, response, next) => {
  response.render("login");
});

// 4ème route - sear-recipe
router.get("/search-recipe", (request, response, next) => {
  response.render("search-recipe");
});

// 5eme route - les recettes
router.get("/recipes", (request, response, next) => {
  response.render("recipes");
});

//6ème route - recette choisie
router.get("/recipe_id", (request, response, next) => {
  response.render("recipe_id");
});

module.exports = router;
