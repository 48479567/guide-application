var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Conectado a la Base de Datos");
  var sql = "INSERT INTO clientes1 (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function(err, result){
    if (err) throw err;
    console.log("Datos multiples Agregados Correctamente");
    console.log(result.affectedRows);
  });
});

/*consola:
C:\Users\ASUS\nodejs_w3schools\2mysql_nodejs\15insert_into_table>node ej3_insert_into_table_multiple_rows_with_wiew_result.js
Conectado a la Base de Datos
Datos multiples Agregados Correctamente
14
*/
