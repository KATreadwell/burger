// Inside the burgers_controller.js file, import the following:

// Express
// burger.js

let express = require("express");
let router = express.Router();

// Create the router for the app, and export the router at the end of your file.
let burger = require("../models/burger")

router.get("/", function(req, res) {
    burgers.all(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "name"
    ],  [
        req.body.name
    ], function (result){
        res.json({ id: result.insertId});
    });
});