var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado!");
  con.query("CREATE DATABASE mydb0001", function (err, result){
    if (err) throw err;
    console.log("Base de Datos Creada!!");
  })
});


/*
C:\Users\USer\nodejs\13create_database>node ej1_demo_create_db
Conectado!
Base de Datos Creada!!
*/
