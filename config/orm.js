// Import (require) connection.js into orm.js

let connection = require("../config/connection")

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.

const orm = {
    connection: connection,
    selectAll: (cols, table) => {
        connection.query("SELECT ?? FROM ??", [cols, table], (err, res) => {
            if (err) { throw err; }
            console.log(res);
        })
    },
    insertOne: (cols, table, vals, cb) => {
        connection.query("INSERT INTO " + table, cols, vals, (err, res) => {
            if (err) { throw err; }
            console.log(res);
        })
    },
    insertOne: (cols, table, vals, cb) => {
        connection.query("INSERT INTO " + table, cols, vals, (err, res) => {
            if (err) { throw err; }
            console.log(res);
        })
    },


}

module.exports = orm;