/*
Servidor de archivos Node.js
Ahora sabemos cómo analizar la cadena de consulta, y en el capítulo anterior aprendimos cómo hacer que Node.js se comporte como un servidor de archivos. Combinemos los dos y entreguemos el archivo solicitado por el cliente.

Cree dos archivos html y guárdelos en la misma carpeta que sus archivos node.js.

*Cree un archivo Node.js que abra el archivo solicitado y devuelva el contenido al cliente. Si algo sale mal, lanza un error 404:
*/


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data){
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Sin Fondos");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
