var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Conectado!");
  var sql = "SELECT name, direccion FROM cliente";
  con.query(sql, function(err, result, fields){
    if (err) throw err;
    console.log(result);
  });
});

/*COMMANDO:
C:\Users\ASUS\nodejs_w3schools\2mysql_nodejs\16select_from_table>NODE ej2_select_some_colums_from_table.js
Conectado!
[ RowDataPacket { name: 'Company Inc', direccion: 'Highway 37' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' } ]
*/
