/**
 * Created by Endo on 23/05/2017.
 */
var db = require('../data-base');

exports.login = function (nick, pass, callback) {
    db.getConnection().query('SELECT * FROM clanssusuarios where nick = ?', nick, function (err, rows) {
        if(!err){
            if(rows[0] != null){
                if(rows[0].pass == pass){
                    callback(false, rows);
                } else {
                    callback(true);
                }
            } else {
                callback(true);
            }
        } else {
            console.log(err);
        }
    });
};

exports.registro = function (data, callback) {
    db.getConnection().query('INSERT INTO clanssusuarios SET ?', data, function (err, rows) {
        if(err){
            console.log(err);
            return callback(err);
        }
        console.log(rows);
        callback(null, rows);
    });
};

exports.gustos = function (data, callback) {
    db.getConnection().query('INSERT INTO clanssgustos SET ?', data, function (err, rows) {
        if(err){
            console.log(err);
            return callback(err);
        }
        console.log(rows);
        callback(null, rows);
    });
};