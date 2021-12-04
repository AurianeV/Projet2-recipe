const express = require("express");
const router = express.Router();
// const router = require("express").Router();

//premiere route- Home page
router.get("/home", (request, response, next) => {
  response.send("Salut");
});
// deuxime route - sign up
router.get("/signup", (request, response, next) => {
  response.send("Inscription");
});
// 3eme route - login
router.get("/login", (request, response, next) => {
  response.send("connexion");
});

module.exports = router;
