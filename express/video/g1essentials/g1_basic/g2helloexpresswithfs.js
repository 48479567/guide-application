const express = require('express'),
  app = express()

app
  .get('/', (req, res) => { 
    res.sendFile(`${__dirname}/index.html`)
  })
  .listen(3000, console.log('Escuchando en el Puerto 3000 con la muestra de una imagen'))