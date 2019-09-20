var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// C:\Users\ASUS\nodejs_w3schools>node demo_http_url

//Entrada en la URI : http://localhost:8080/loquedesees.
//Salida en la pantalla: /loquedesees
