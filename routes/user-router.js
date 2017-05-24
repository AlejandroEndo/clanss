/**
 * Created by Endo on 23/05/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');

var userControl = require('../controller/user-controller');
var root = require('../server');

var router = express.Router();
router.use(bodyparser.urlencoded({extended:false}));

router.post('/login', function (req, res) {
    var nick = req.body.nick;
    var pass = req.body.pass;

    if(nick == undefined || pass == undefined){
        console.log("Debe llenar todos los campos!");
        res.redirect('/');
    } else {
        userControl.login(nick, pass, function (err, result) {
            if(!err){
                res.json(result);
                var string = JSON.stringify(result);
                var resultado = JSON.parse(string);
                root.setUsuario(resultado[0]);
                console.log(resultado[0]);
            } else {
                res.json(err);
            }
        });
    }
});

router.post('/registro', function (req, res) {
    var data = req.body;

    console.log(data);

    userControl.registro(data, function (err) {
        if(!err){
            console.log("Esta es la data");
            console.log(data);
            root.setUsuario(data);
            res.json(true);
        } else {
            res.json(false);
        }
    });
});

router.post('/gustos', function (req, res) {

    console.log(root.getUsuario());
    var data = {
        shooter: req.body.s,
        estrategia: req.body.e,
        simulacion: req.body.si,
        deporte : req.body.d,
        carrera: req.body.c,
        aventura: req.body.a,
        rpg: req.body.r,
        id_usuario: root.getUsuario().nick
    };

    console.log(data);

    userControl.gustos(data, function (err) {
        if(!err){
            res.json(true);
        } else {
            res.json(false);
        }
    })
});

router.get('/getAll', function (req, res) {
    userControl.getAll(function (err, rows) {
        if(!err){
            res.json(rows);
        } else {
            res.json(err);
        }
    });
});

router.post('/agregarAlClan', function (req, res) {
    var data = {
        name: req.body.name,
        id_usuario: req.body.id_usuario
    };
    userControl.agregarAlClan(data, function (err) {
        if(!err){
            res.json(true);
        } else {
            res.json(false);
        }
    });
});

module.exports = router;