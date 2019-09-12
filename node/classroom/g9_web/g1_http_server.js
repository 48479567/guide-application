// Node.org

//Solicitar el modulo http de node
//Crea una variable para el hostname que es igual a localhost
// server ejecuta esta funcion lo que levanta el servidor en la web con dos parametros
const http = require('http'),
  hostname = '127.0.0.1',
  port = 3000,
  server = http.createServer((req, res) => { 
  // por ejemplo en ajax, las 200 son correctas, las 300 redirecciones, las 400 error alguno de cliente, 500 errores del navegador
  res.statusCode = 200
  //cabecera de texto plano o html
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hola mundo</h1>')
})

server.listen(port, hostname, () => console.log(`Servidor ejecutandose en http://${hostname}:${port}`)
)