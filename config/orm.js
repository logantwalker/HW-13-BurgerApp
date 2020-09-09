var connection = require('./connection');

const orm = {
    selectAll: function(cb){
        let queryStr = `SELECT * FROM burgers`
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(newBurger,cb){
        console.log(newBurger);
        let queryStr = `INSERT INTO burgers VALUE (default,'${newBurger}',false)`
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;