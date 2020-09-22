// require express & handlebars
var express = require("express");
var exphbs = require("express-handlebars");
// require routes
var routes = require("./controllers/burgersController");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("App listening on port:%s", PORT);
});