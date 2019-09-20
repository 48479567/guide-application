var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "OmalsaIngenieros"
});

con.connect(functions(err){
  if (err) throw err;
  alert("Bienvenido");
  var user = document.getElementByName("user").value;
  var password = document.getElementByName("password").value;

  var sql = "SELECT Nombres, Pasword FROM usuarios WHERE Id_Ingreso = 'user'";
  con.query(sql, function(err, result){
    if (err) throw err;
    if (password == result[0].Pasword){
      alert("Bienvenido Gerente" + result[0].Nombres);
    }
  });
});
