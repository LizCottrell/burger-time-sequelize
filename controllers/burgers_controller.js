var express = require("express");
var router = express.Router();
var db = require("../models");

// GET Home
router.get("/", function(req, res) {
  db.Burger.findAll({})
      .then(function(data) {
        return res.render("index", { burgers: data } );
      });
});

// GET Burger API
router.get("/api", function(req, res) {
  db.Burger.findAll({})
      .then(function(data) {
        res.json(data);
      });
});

// POST Burger
router.post("/api", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
  })
    .then(function(data) {
      res.json(data);
    });
}); 

// PUT / UPDATE Burger
router.put("/api/:id", function(req, res) {
  db.Burger.update({
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
      res.json(data);
      if (data.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
}); 

// DELETE Burger
router.delete("/api/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(data) {
      res.json(data);
      if (data.affectedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    });
});


module.exports = router;