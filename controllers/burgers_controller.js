let express = require("express");
let router = express.Router();
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
        "name", "devoured"
    ],  [
        req.body.name, req.body.devoured
    ], function (result){
        res.json({ id: result.insertId});
    });
});

// router.put("/api/burgers/:id", function(req, res){
//     var devoured = "id = " + req.params.id;

//     console.log("devoured", devoured)

//     burger.update([
//         devoured: req.body.devoured
//     ], condition, function(result){
//         if
//     };
// });

module.exports = router;