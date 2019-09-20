var http = require('http');

//create un objeto de servidor
http.createServer(function (req, res){
    res.write("Hi"); // escribir una respuesta al cliente
    res.end(); // finalizacion de la respuesta
}).listen(8080); // el objeto de servidor escucha en el puerto 8080

// C:\Users\ASUS\nodejs_w3schools>node demo_http
