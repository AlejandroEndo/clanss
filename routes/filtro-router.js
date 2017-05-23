/**
 * Created by Endo on 8/05/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');

var controller = require('../controller/filtro-controller');

var router = express.Router();
router.use(bodyparser.urlencoded({extended: false}));

router.get('/data', function (req, res) {

});

router.post('/informacion', function (req, res) {
    var data = req.body;
    console.log(data);

    controller.addPreferences(data, function (err, recomendacion) {
        if(!err) {
            res.json(recomendacion);
        } else {
            res.json(err);}
    });
});

router.get('/get_clan', function (req, res) {
    controller.clanear(function (err, miembros) {
        res.json(miembros);
    });
});

router.post('/recomendar', function (req, res) {
    var data = req.body;
    var index = 0;

    var s = 0;
    var e = 0;
    var si = 0;
    var d = 0;
    var c = 0;
    var a = 0;
    var rpg = 0;

    controller.recomendar(data, function (err, r) {
        index++;
        console.log(r);
        if(r != undefined) {
            s += r.shooter;
            e += r.estrategia;
            si += r.simulacion;
            d += r.deporte;
            c += r.carrera;
            a += r.aventura;
            rpg += r.rpg;
        }

        if(index >= data.length){
            if(!err){
                var recomendar = {
                    shooter: s,
                    estrategia: e,
                    simulacion: si,
                    deporte: d,
                    carrera: c,
                    aventura: a,
                    rpg: rpg,
                };
                res.json(recomendar);
            } else {
                res.json(err);
            }
        }

    });
});

module.exports = router;