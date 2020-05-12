let express = require("express");
let router = express.Router();
let burger = require("../models/burger")


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    let newBurger = req.body;
    burger.insertOne(newBurger, function(data) {
        res.send(data)
    });
    
});

// router.put("/api/burgers/:id", function(req, res){
//     var devoured = "id = " + req.params.id;

//     console.log("devoured", devoured)

//     burger.updateOne([
//         devoured: req.body.devoured
//     ], condition, function(result){
//         if
//     };
// });

module.exports = router;