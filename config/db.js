var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1223',
  database : 'latihanday30'
});

module.exports = db
