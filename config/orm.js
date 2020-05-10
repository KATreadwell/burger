let connection = require("../config/connection")

//helper function to convert an array of ? and converts into string
// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }

//helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//         var value = ob[key];
//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }

let orm = {
    selectAll: (cols, table) => {
        connection.query("SELECT ?? FROM ??", [cols, table], (err, res) => {
            if (err) { throw err; }
            console.log(res);
        })
    },
    // insertOne: (cols, table, vals, cb) => {
    //     connection.query("INSERT INTO " + table, cols, vals, (err, res) => {
    //         if (err) { throw err; }
    //         console.log(res);
    //     })
    // },
    // updateOne: (objColVals, table, condition, cb) => {
    //     connection.query("UPDATE " + table, cols, vals, (err, res) => {
    //         if (err) { throw err; }
    //         console.log(res);
    //     })
    // updateOne: function (table, objColVals, vals, cb) {
    //     var queryString = "UPDATE " + table;

    //     queryString += " SET ";
    //     queryString += objToSql(objColVals);
    //     queryString += " WHERE ";
    //     queryString += vals;

    //     console.log(queryString);
    //     connection.query(queryString, function (err, result) {
    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });
    // }
}


module.exports = orm;