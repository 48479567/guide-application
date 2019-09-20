var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Conectado a la Base de datos mydb!!!");
  var sql = "CREATE TABLE clientes1 (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result){
    if (err) throw err;
    console.log("Tabla cliente con id Creada!!")
  });
});


/*consola:
C:\Users\USer\nodejs\14create_table>node ej2_create_table_customer_with_int_primary_key.js
Conectado a la Base de datos mydb!!!
Tabla cliente con id Creada!!
*/
