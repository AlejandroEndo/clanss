/**
 * Created by Endo on 8/05/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');

var db = require('./data-base');
var filtro = require('./routes/filtro-router');
var user = require('./routes/user-router');

var usuario;

exports.setUsuario = function (nuevo) {
    usuario = nuevo;
};
exports.getUsuario = function () {
    return usuario;
};

var app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use('/user', user);
app.use('/filtro', filtro);

var port = process.env.PORT || 8080;

db.poolConnection(function (err) {
    if(err){
        console.log("Error conectando a la base de datos");
    } else {
        app.listen(port, function() {
            console.log('app running on http://localhost:' + port + '/');
        });
    }
});