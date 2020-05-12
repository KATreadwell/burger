let connection = require("../config/connection")

let orm = {
    selectAll: (cols, table, cb) => {
        connection.query("SELECT ?? FROM ??", [cols, table], (err, res) => {
            if (err) { throw err; }
            console.log(res);
            cb(res)
        })
    },
    insertOne: (cols, table, vals, cb) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, cols, vals], (err, res) => {
            if (err) { throw err; }
            console.log(res);
            cb(res)
        })
    },
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