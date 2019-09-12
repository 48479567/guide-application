/* 
*Socket.IO:
*1)Evento Conection
*2)Puedes crear tus propios eventos.
*3) emit(): cuando se comunica un mensaje a todos los clientes conectados.
*4) bradcast.emit(): cuando se comunica un mensaje a todos los clientes, excepto al que lo origina
*5) Los 4 puntos anteriores funcionan en el servidor y en el cliente
*/

const c = console.log,
  http = require('http').createServer(server)
  fs = require('fs'),
  io = require('socket.io')(http) // Con esto socket io recibe al servidor con el que trabajara

function server(req, res) {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/html'})
      return res.end('<h1>Error Interno del Servidor<h1>')
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'})
      return res.end(data, 'utf-8')
    }
  })
}
const port = 3000
http.listen(port, 'localhost', c('Servidor Corriendo desde localhost: 3000'))

io.on('connection', socket => {
  socket.emit('hello', { message: 'Hola Mundo con Socket.IO'})

  socket.on('otro evento que me invento', data => c(`Esto se ve en la consola ${data.name}`))

  socket.on('mandato', data => {
    c(data.mandato)
    socket.emit('remandato', {name: 'Otro', port: port})
  })
})