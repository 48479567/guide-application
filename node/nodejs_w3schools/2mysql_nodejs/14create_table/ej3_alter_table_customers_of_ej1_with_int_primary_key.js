var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Conectado a la Base de Datos mydb!!!");
  var sql = "ALTER TABLE cliente ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result){
    if (err) throw err;
    console.log("tabla cliente actualizado con clave primaria!!!");
  });
});

/*consola:
C:\Users\USer\nodejs\14create_table>node ej3_alter_table_customers_of_ej1_with_int_primary_key.js
Conectado a la Base de Datos mydb!!!
tabla cliente actualizado con clave primaria!!!
*/
