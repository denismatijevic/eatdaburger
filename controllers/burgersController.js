// establishing connections
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(burgerData) {
    res.render("index", { burder_data: burgerData })
  });
});

router.post("/burgers/insert", function(req, res){
  burger.insert(req.body.burger_name, function(result) {
    res.redirect("/")
  });
});

router.put("/burgers/:id", function(req, res){
  burger.update(req.params.id, function(result) {
    res.status(200);
  });
});

module.exports = router;
