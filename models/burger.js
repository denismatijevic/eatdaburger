// requiring orm.js
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insert: function(name, cb) {
    orm.insert("burgers", ["burger_name", "devoured"],
    [name, false], cb);
  },

  update: function(id, cb) {
    var condition = "id=" +id;
    orm.update("burgers", {
    devoured: true
  }, condition, cb);
}
};

module.exports = burger;