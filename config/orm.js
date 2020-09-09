var connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

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
        let queryStr = `INSERT INTO burgers VALUE (default,'${newBurger}',false,default)`
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function(id,cb){
        let queryStr = `UPDATE burgers SET devoured = true WHERE id = ${id}`;
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}


module.exports = orm;