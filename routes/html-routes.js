var db = require("../models");
var path = require('path');

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/content/:id", function(req, res) {
    db.users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost.dataValues);
      res.render("profile", dbPost.dataValues);
    });
    db.users.findAll({})
    .then(function(dbPost) {
      res.render("feed", dbPost);
    });
  });

};