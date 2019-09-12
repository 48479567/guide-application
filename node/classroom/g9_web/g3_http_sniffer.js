// sniffer ~ olfatear:: ese es el punto en ese ejercicio
const server = require('http'),
  client = require('https'),
  c = console.log,
  hostname = 'localhost',
  port = 80,
  options = {
    host: 'www.mercuriosistemico.com',
    port: 443,
    protocol: 'https:',
    path: ''
  },
  httpClient = res => {
    c(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`)
    //mientras recibas datos vas almacenando en la variable 'data', esto cuando se envia datos
    res.on('data', data => { 
      htmlCode += data
      c(data, data.toString())
    })
  },
  httpError = err => c(`El sitio ${options.host} no respondió. Código: ${err.code}. Mensaje: ${err.message}`), 
  webServer = (req, res) => {
    res.statusCode = 200,
    res.setHeader('Content-Type', 'text/html')
    res.end(htmlCode)
  }

// Cadena de robo del codigo html al comienzo vacio
let htmlCode = ''

// Instancia de Cliente de HTTP
client
  .get(options, httpClient)
  .on('error', httpError)

// Instancia de Servidor de HTTP
server
  .createServer(webServer)
  .listen(port, hostname, () => c(`Servidor ejecutandose en http://${hostname}:${port}/`))
