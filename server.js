// require express & handlebars
var express = require("express");
var exphbs = require("express-handlebars");
// require routes
// var routes = require("./controllers/burgersController");

const PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on port:%s", PORT);
});