let orm = require("../config/orm")

let burger = {
    selectAll: function(cb) {
        //replace function with a string in a table
        orm.selectAll('*', 'burgers', function (res) {
            cb(res)    
        });
        
    },
    // insertOne: function(objColsVals, condition, cb) {
    //     orm.insertOne("burgers", objColsVals, condition, function(res) {
    //         cb(res);
    //     });
    // },
    // updateOne: function(objColsVals, condition, cb) {
    //     orm.updateOne("burgers", objColsVals, condition, function(res) {
    //         cb(res);
    //     });
    // }
};

module.exports = burger;