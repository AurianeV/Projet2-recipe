const { Router } = require("express");
const router = new Router();

// User model
const User = require("../model/User.model.js");

// Bcrypt to encrypt passwords
const bcryptjs = require("bcryptjs");
const bcryptSalt = 10;

// Inscription
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
        res.render("auth/signup", { errorMessage: "The username already exists" });
        return;
      }

      console.log("INSIDE findOne =>", req.body);
      // Encrypt the password
      const salt = bcryptjs.genSaltSync(bcryptSalt);
      const hashPass = bcryptjs.hashSync(password, salt);


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
        .then(() => {
          req.session.currentUser = user;
          res.redirect("/search-recipe")
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

// Connexion 
      // .get() route ==> to display the login form to users
      router.get('/login', (req, res, next) => { 
        console.log("coucou");
        res.render('auth/login');
        
      });

      // .post() login route ==> to process form data
      router.post('/auth/login', (req, res, next) => {
        const { email, password } = req.body;
      
        // Si l'utilisateur ne rempli pas les données --> message d'erreur
        if (email === '' || password === '') {
          res.render('auth/login', {
            errorMessage: 'Please enter both, email and password to login.'
          });
          return;
        }
      
        User.findOne({ email })
          .then(user => {
            if (!user) {
              res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
              return;
            } else if (bcryptjs.compareSync(password, user.passwordHash)) {
              req.session.currentUser = user;
              res.redirect('/search-recipe');
            } else {
              res.render('auth/login', { errorMessage: 'Incorrect password.' });
            }
          })
          .catch(error => next(error));
      });

module.exports = router;
// install bcrypt
