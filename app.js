const express = require("express");

// we create our one server name
const hbs = require("hbs");

const app = express();

//server start
app.listen(3000, () => console.log("my first app listening on port 3000!"));

// start route
const index = require("./routes/index");
app.use("/", index);

module.exports = app;
