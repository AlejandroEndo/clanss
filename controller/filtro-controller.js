/**
 * Created by Endo on 8/05/2017.
 */

var db = require('../data-base');
var pito = [];
var subPito;
exports.getData = function (callback) {
    db.getConnection().query('SELECT * FROM ');
};

exports.addPreferences = function (data, done) {
    db.getConnection().query('INSERT INTO clanssgustos SET ?', data, function (err, rows) {
        if(err){
            console.log(err);
            return done(err);
        }
        done(null, rows);
    });
};

exports.clanear = function (callback) {
    var user = "hci";
    db.getConnection().query('SELECT * FROM clanssclan WHERE name = ?', user, function (err, rows) {
        if(!err){
            if(rows[0] != null){
                callback(false, rows);
            } else {
                callback(true);
            }
        } else {
            console.log(err);
        }
    });
};

exports.recomendar = function (data, callback) {
    for(var i = 0; i < data.length; i++){
        db.getConnection().query('SELECT * FROM clanssgustos WHERE id_usuario = ?', data[i].id_usuario, function (err, rows) {

            var string = JSON.stringify(rows);
            var result = JSON.parse(string);

            return callback(false, result[0]);
        });

    }
};

exports.getClanes = function (data, callback) {
    console.log(data);
    db.getConnection().query('SELECT * FROM clanssclanes WHERE id_usuario = ?', data, function (err, rows) {
        //console.log(rows);
        console.log(err);
        if(!err){
            console.log(rows);
            return callback(false, rows);
        } else {
            return callback(true);
        }
    });
};

exports.getIntegrantes = function (data, callback) {
    db.getConnection().query('SELECT * FROM clanssclanes WHERE name = ?', data, function (err, rows) {
        if(!err){
            return callback(false, rows);
        } else {
            return callback(true);
        }
    });
};

exports.juegos = function (callback) {
    db.getConnection().query('SELECT * FROM clanssjuegos', function (err, rows) {
        if(!err){
            return callback(false, rows);
        } else {
            return callback(true);
        }
    });
};