var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!");
});

/*C:\Users\ASUS\nodejs_w3schools\2nodejs_mysql\12nodejs_mysql_getstarted\node ej1_mysql_connection.js
Connected!!
*/
