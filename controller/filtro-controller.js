/**
 * Created by Endo on 8/05/2017.
 */

var db = require('../data-base');

exports.getData = function (callback) {
db.getConnection().query('SELECT * FROM ');
};

exports.addPreferences = function (data, done) {
    db.getConnection().query('INSERT INTO clanss-gustos SET ?', data, function (err, rows) {
        if(err)return done(err);

        done(null, rows);
    });
};