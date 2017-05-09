/**
 * Created by Endo on 8/05/2017.
 */

var mysql = require('mysql');
var pool = null;

exports.poolConnection = function (done) {
   pool = mysql.createPool({
       host: '200.3.193.22',
       user: 'P09652_1_6',
       password: 'gYLm08r0',
       database: 'P09652_1_6'
   });
   done (false);
};

exports.getConnection = function () {
    return pool;
};