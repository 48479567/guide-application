var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Conectado a la base de datos mydb");
  var sql = "INSERT INTO cliente (name, direccion) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Insercion a la tabla cliente exitosa!!!");
  });
});

/*codigo:
C:\Users\ASUS\nodejs_w3schools\2mysql_nodejs\15insert_into_table>node ej1_insert_into_table_one_row.js
Conectado a la base de datos mydb
Insercion a la tabla cliente exitosa!!!
*/
