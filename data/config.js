var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'node',
    password: 'node12345',
    database: 'portfolio',
    insecureAuth: true
});

module.exports = connection;
