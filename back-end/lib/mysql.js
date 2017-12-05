'use strict'

const mysql  = require('mysql');

module.exports = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "PC_root",
    database : "bill_files"
});
