var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function (err){
  if (err) throw err;
  console.log("Conectado a mydb");
  var sql = "CREATE TABLE cliente (name VARCHAR(255), direccion VARCHAR(255))";
  con.query(sql, function (err, result){
    if (err) throw err;
    console.log("Tabla de cliente creada");
  });
});

/*consola:
C:\Users\USer\nodejs\14create_table>node ej1_create_table_customer_without_primary_key.js
Conectado a mydb
Tabla de cliente creada
*/
