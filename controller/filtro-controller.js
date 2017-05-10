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