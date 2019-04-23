var orm = require("../config/orm.js");

var burger = {
    stuff: function(cb) {
        orm.stuff("burgers", function(res) {
            cb(res);
        });
    },
    stuffnew: function(name, cb) {
        orm.stuffnew("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;