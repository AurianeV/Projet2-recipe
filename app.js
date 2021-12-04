const path = require("path");

const express = require("express");

// we create our one server name
const hbs = require("hbs");

const app = express();

//server start
app.listen(3000, () => console.log("my first app listening on port 3000!"));

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// start route
const index = require("./routes/index");
app.use("/", index);

module.exports = app;
