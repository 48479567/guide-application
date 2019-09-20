/*
El módulo de URL incorporado
El módulo URL divide una dirección web en partes legibles.

Para incluir el módulo de URL, use el require() método:
*/
var url = require('url');

var adr ='http://localhost:8080/default.htm?year=2018&month=may';
//Analice una dirección con el url.parse() método y devolverá un objeto URL con cada parte de la dirección como propiedades:
var q = url.parse(adr, true);
console.log('q', q)

console.log(q.host); //devuelve 'localhost:8080'
console.log(q.pathname); //devuelve '/default.htm'
console.log(q.search); //devuelve '?year=2018&month=may

var qdata = q.query; // devuelve un objeto: {year: 2018, month: 'may'}
console.log(qdata.month); //muestra 'may'


/*
C:\Users\ASUS\nodejs_w3schools\7url_module>node ej1_url_parse.js
localhost:8080
/default.htm
?year=2018&month=may
may
*/
