/**
 * Created by Endo on 8/05/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');

var controlller = require('../controller/filtro-controller');

var router = express.Router();
router.use(bodyparser.urlencoded({extended: false}));

router.get('/data', function (req, res) {

});

router.post('/informacion', function (req, res) {
    var data = req.body;
    console.log(data);

    controlller.addPreferences(data, function (err, recomendacion) {
        if(!err)
            res.json(recomendacion);
        else
            res.json(err);
    });
});

module.exports = router;