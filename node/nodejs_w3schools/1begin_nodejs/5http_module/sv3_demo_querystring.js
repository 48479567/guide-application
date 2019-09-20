var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var text = q.year + " " + q.month;
  res.write(text);
  res.end();
}).listen(8080);

// C:\Users\ASUS\nodejs_w3schools>node demo_http_url

//Entrada en la URI : http://localhost:8080/?year=loquedesees1&month=loquedesees2
//Salida en la pantalla: loquedesees1 loquedesees2
