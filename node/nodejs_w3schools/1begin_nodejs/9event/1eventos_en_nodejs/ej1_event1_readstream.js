/*
Eventos de Node.js
Node.js es perfecto para aplicaciones impulsadas por eventos.
Eventos en Node.js
Cada acción en una computadora es un evento. Como cuando se establece una conexión o se abre un archivo.
Los objetos en Node.js pueden disparar eventos, como el objeto readStream dispara eventos al abrir y cerrar un archivo:
*/
var fs = require('fs');
var rs = fs.createReadStream('./fl1_demofile.txt');
/*Write to the console when the file is opened:*/
rs.on('open', function(){
  console.log('El archivo esta Abierto');
});

rs.on('close', function(){
  console.log('El archivo esta Cerrado');
});
