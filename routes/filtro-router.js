/**
 * Created by Endo on 8/05/2017.
 */

var express = require('express');
var bodypaser = require('body-parser');

var controlller = require('../controller/filtro-controller');

var router = express.Router();
router.use(bodypaser.urlencoded({extended: false}));

router.get('/data', function (req, res) {

});

module.exports = router;