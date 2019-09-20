/*
Usando un paquete
Una vez que el paquete está instalado, está listo para usar.

Incluya el paquete "mayúsculas" de la misma manera que incluye cualquier otro módulo:
*/

var http = require('http');
var uc = require('upper-case');
//Cree un archivo Node.js que convertirá la salida "Hello World!" en letras mayúsculas:
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("Hola Mundo"));
  res.end();
}).listen(8080);

//C:\Users\ASUS\nodejs_w3schools\8npm_node_package_manager>node sv1_demo_uppercase.js
