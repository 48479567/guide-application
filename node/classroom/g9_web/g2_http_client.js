// Muestra informacion para el cliente, crear un cliente
// http es un emisor de eventos que te  permite crear, en caso la peticion no responda se ejecuta on
const http = require('https'),
  options = {
// opciones del cliente
    host: 'mercuriosistemico.com',
    port: 443,
    protocol: 'https:',
    path: '/ISG/'
  }
  
  http
    .get(options, res => console.log(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`))
    .on('error', err => console.log(`El sitio ${options.host} no respondió. Código: ${err.code}. Mensaje: ${err.message}`))

// D:\io\inf\aplicacion_guia\node_js\classroom\g9_web>node g2_http_client.js
// El sitio jonmircha.com ha respondido. Código: 301. Mensaje: Moved Permanently
// Esto sucede por la redireccion de http a https, en estos tiempos el algoritmo de google, te redigirige a un sitio seguro, desde un servidor seguro
// cuando tu le cambias la s a https te redirige https, redireccion permanente.
// La tipica solucion a la redireccion al sitio seguro esto con 443
// Con el protocolo que se trabaja con https entonces el require tambien debe estar con https
// puerto normal :80, puerto seguro: 443, es incompatible hacer una peticion normal a un punto seguro

// Open ssl gestionador de los sitios seguros