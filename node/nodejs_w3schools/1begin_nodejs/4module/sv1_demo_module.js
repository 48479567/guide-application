var http = require('http');
var dt = require('./md1_myfirstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(80);


//C:\Users\ASUS\nodejs_w3schools>node demo_module.js
