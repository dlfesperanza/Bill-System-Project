'use strict'

const mysql  = require('mysql');

module.exports = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "access denied",
    database : "bill_files"
});
