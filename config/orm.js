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
    updateOne: (cols, table, vals, cb) => {
        connection.query("UPDATE ?? SET devoured = 1 FROM ??", [table, cols, vals], (err, res) => {
            if (err) { throw err; }
            console.log(res);
            cb(res)
        })
    }
}

module.exports = orm;