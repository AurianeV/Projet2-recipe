const path = require("path");
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Projet2-recipe", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"😎`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express View engine setup
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

//
// Routers (mount)
//

// main router
const mainRouter = require("./routes/index");
app.use("/", mainRouter); // fais exister les routes contnues dans le router routes/index.js

// auth router
const authRouter = require("./routes/auth.routes");
app.use("/", authRouter); // fais exister les routes contnues dans le router routes/auth.routes.js

//server start
app.listen(3000, () => console.log("my first app listening on port 3000!"));

module.exports = app;
