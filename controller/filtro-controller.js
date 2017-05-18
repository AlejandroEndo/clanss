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

    var s = 0;
    var e = 0;
    var si = 0;
    var d = 0;
    var c = 0;
    var av = 0;
    var r  = 0;

    for(var i = 0; i < data.length; i++){
        console.log("DATA");
        console.log(data[i].id_usuario);
        db.getConnection().query('SELECT * FROM clanssgustos WHERE id_usuario = ?', data[i].id_usuario, function (err, rows) {
            //console.log(rows);

            var string = JSON.stringify(rows);
            var result = JSON.parse(string);

            //console.log("Valor de MYSQL");
            console.log(result[0]);
            console.log(i);

            if(result[0] != undefined) {
                s += result[0].shooter;
                e += result[0].estrategia;
                si += result[0].simulacion;
                d += result[0].deporte;
                c += result[0].carrera;
                av += result[0].aventura;
                r += result[0].rpg;
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

    //console.log("Resultado obtenido");
    //console.log(done);

    callback(false, done);
};