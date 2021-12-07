const express = require("express");
const router = express.Router();
// const router = require("express").Router();

//premiere route- Home page
router.get("/home", (request, response, next) => {
  response.render("index");
});
// deuxime route - sign up
router.get("/signup", (request, response, next) => {
  response.render("signup");
});
// 3eme route - login
router.get("/login", (request, response, next) => {
  response.render("login");
});

// 4ème route - sear-recipe
router.get("/search-recipe", (request, response, next) => {
  response.render("search-recipe");
});

module.exports = router;
