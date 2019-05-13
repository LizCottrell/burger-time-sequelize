var db = require("../models");

module.exports = function(app) {

  // GET Home
  app.get("/", function(req, res) {
    db.Burger.findAll({})
      .then(function(data) {
        res.render("index", { burgers: data } );
      });
  });

  // GET Burger API
  app.get("/api", function(req, res) {
    db.Burger.findAll({})
      .then(function(data) {
        res.json(data);
      });
  });

  // Burger route for saving a new Burger
  app.post("/api", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
    })
      .then(function(data) {
        res.json(data);
      });
  });
  
  // PUT route for updating Burgers
  app.put("/api/:id", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(data) {
        res.json(data);
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

    // DELETE route for deleting Burgers
    app.delete("/api/:id", function(req, res) {
      db.Burger.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(data) {
          res.json(data);
          if (result.affectedRows === 0) {
            return res.status(404).end();
          }
          res.status(200).end();
        });
    });
  };