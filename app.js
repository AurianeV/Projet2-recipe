const path = require("path");
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');

require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
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


app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 60000 } // 60 * 1000 ms === 1 min
  })
);

//
// Routers (mount)
//

// main router
const mainRouter = require("./routes/index");
app.use("/", mainRouter); // fais exister les routes contnues dans le router routes/index.js

// auth router
const authRouter = require("./routes/auth.routes");
const { createRequire } = require("module");
app.use("/", authRouter); // fais exister les routes contnues dans le router routes/auth.routes.js

//server start
const port = process.env.PORT
app.listen(port, () => {
  console.log(`my first app listening on port ${port}!`)
});



module.exports = app;
