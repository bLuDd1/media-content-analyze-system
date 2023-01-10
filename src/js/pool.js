'use strict';

const mysql = require('mysql2');

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "razer228228",
    database: "mydb",
};

const pool = mysql.createConnection(connectionOptions);

module.exports = pool;