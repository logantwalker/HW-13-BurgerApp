const express = require("express");

const router = express.Router();

const burger = require('../models/burger');

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.json(hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    let newBurger = req.body.burger_name;
    burger.insert(newBurger, function (result) {
        res.json({ result });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let id = req.params.id;
    console.log(id);
    burger.devour(id, (result) => {
        if (result.changedRows == 0) {
            
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

module.exports = router;