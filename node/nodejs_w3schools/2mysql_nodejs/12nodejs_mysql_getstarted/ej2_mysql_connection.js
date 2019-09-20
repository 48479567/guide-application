var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = 'CREATE DATABASE databasename2';// ESTA LINEA FUE IMPLEMENTADO POR MI...
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});


/*C:\Users\ASUS\nodejs_w3schools\2nodejs_mysql\12nodejs_mysql_getstarted\node ej2_mysql_connection.js
Connected!!
Result: [object Object]
*/
