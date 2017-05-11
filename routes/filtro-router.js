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
    controller.recomendar(data, function (err, recomendacion) {
        if(!err){
            res.json(recomendacion);
        } else {
            res.json(err);
        }
    });
});

module.exports = router;