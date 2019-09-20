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
    console.log("Resultado: ");
    console.log(result);
    console.log("Informacion de campo de resultado:");
    console.log(fields);
    console.log("Informacion de campo individual de fields[1].name:");
    console.log(fields[1].name);
    //Cuidado con la conbinacion de los objetos con texto como "texto" + result... mostrara resultados imprevistos
  });
});

/*commando:
C:\Users\ASUS\nodejs_w3schools\2mysql_nodejs\16select_from_table>node ej4_select_some_colums_from_table_view_field_all_properties.js
Conectado!
Resultado:
[ RowDataPacket { name: 'Company Inc', direccion: 'Highway 37' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' },
  RowDataPacket { name: 'Michelle', direccion: 'Blue Village 1' } ]
Informacion de campo de resultado:
[ FieldPacket {
    catalog: 'def',
    db: 'mydb',
    table: 'cliente',
    orgTable: 'cliente',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'mydb',
    table: 'cliente',
    orgTable: 'cliente',
    name: 'direccion',
    orgName: 'direccion',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true } ]
Informacion de campo individual de fields[1].name:
direccion
*/
