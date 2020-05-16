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
        connection.query("INSERT INTO ?? (??) VALUES (?)", [cols, table, vals], (err, res) => {
            if (err) { throw err; }
            console.log(res);
            cb(res)
        })
    },
    updateOne: (table, cols, vals, cb) => {
        connection.query("UPDATE ?? SET devoured = 1 WHERE ?? = ? VALUES ?", [table, cols, vals], (err, res) => {
            if (err) { throw err; }
            console.log(res);
            cb(res)
        })
    }
}

module.exports = orm;