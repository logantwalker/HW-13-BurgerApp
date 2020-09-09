const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
    },
    insert: function(newBurger,cb){
        orm.insertOne(newBurger, function(res){
            cb(res)
        })
    },
    devour: function(id,cb){
        orm.update(id,function(res){
            cb(res);
        });
    }
}

module.exports = burger;