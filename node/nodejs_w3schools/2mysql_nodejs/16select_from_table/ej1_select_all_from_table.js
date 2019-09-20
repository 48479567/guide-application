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
  var sql = "SELECT * FROM cliente";
  con.query(sql, function(err, result, fields){
    if (err) throw err;
    console.log(result);
  });
});

/*commando:
Conectado!
[ RowDataPacket { id: 1, name: 'Company Inc', direccion: 'Highway 37' },
  RowDataPacket { id: 2, name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { id: 3, name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { id: 4, name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { id: 5, name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { id: 6, name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { id: 7, name: 'Michelle', direccion: 'Blue Village 1' } ]
*/
