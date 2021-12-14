const { Router } = require("express");
const router = new Router();

// User model
const User = require("../model/User.model.js");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/auth/signup", (req, res, next) => {
  const { username, mail, password } = req.body;

  console.log(req.body);
  // {name: "test", mail: "email@bla", password: "***" } // req.body
  // 1. Check username and password are not empty
  if (!username || !password) {
    res.render("auth/signup", {
      errorMessage: "Indicate username and password",
    });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      // 2. Check user does not already exist
      if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
      }

      console.log("INSIDE findOne =>", req.body);
      // Encrypt the password
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      //
      // Save the user in DB
      //
      console.log("hashPass", hashPass);
      const newUser = new User({
        username,
        passwordHash: hashPass,
      });

      newUser
        .save()
        .then(() => res.redirect("/"))
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

module.exports = router;
// install bcrypt
