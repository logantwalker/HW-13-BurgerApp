const express = require("express");

const router = express.Router();

const burger = require('../models/burger');

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.get("/api/burgers", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.json(hbsObject);
    });
});

router.post("api/burgers", function(req, res) {
    burger.insert(newBurger,function(result) {
        res.json({result});
    });
});

module.exports = router;