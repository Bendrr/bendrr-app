var db = require("../models");

module.exports = function(app) {

  app.get("/users", function(req, res) {
    db.users.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/bends", function(req, res) {
    db.bends.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/interested", function(req, res) {
    db.interested_in_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/safety", function(req, res) {
    db.safety_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/status", function(req, res) {
    db.status_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/spend", function(req, res) {
    db.spend_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/users/:id", function(req, res) {
    db.users.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

    app.get("/bends/:id", function(req, res) {
    db.users.findOne({
      where: {
        id: req.params.id,
        current_bend: true
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });


};