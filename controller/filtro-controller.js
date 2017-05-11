/**
 * Created by Endo on 8/05/2017.
 */

var db = require('../data-base');

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

    var s = 0;
    var e = 0;
    var si = 0;
    var d = 0;
    var c = 0;
    var av = 0;
    var r  = 0;

    for(i = 0; i < data.length; i++){
        db.getConnection().query('SELECT * FROM clanssgustos WHERE id_usuario = ?', data[i].id_usuario, function (err, rows) {
            console.log(rows[0]);

            if(rows[0].shooter > -1){
                s += rows.shooter;
            }
            if(rows.estrategia > -1){
                e += rows.estrategia;
            }
            if(rows.simulacion > -1){
                si += data[i].simulacion;
            }
            if(rows.deporte > -1){
                d += data[i].deporte;
            }
            if(rows.carrera > -1){
                c += data[i].carrera;
            }
            if(rows.aventura > -1){
                av += data[i].aventura;
            }
            if(rows.rpg > -1){
                r += data[i].rpg;
            }
        });
    }

    var done = {
        shooter: s,
        estrategia: e,
        simulacion: si,
        deporte: d,
        carrera: c,
        aventura: av,
        rpg: r
    };

    callback(false, done);
};