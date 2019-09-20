var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected");
  var sql = "INSERT INTO cliente (name, direccion) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function(err, result){
    console.log("ingreso correcto, con ID: " + result.insertId); // de suma importancio respetar el ID: al final.
  });
});

/*consola:
C:\Users\ASUS\nodejs_w3schools\2mysql_nodejs\15insert_into_table>node ej4_insert_into_table_one_row_with_wiew_result_id.js
Connected
ingreso correcto, con ID: 6
*/
