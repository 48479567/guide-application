const express = require('express'),
  app = express() // Instanciar un objeto del modulo express

  //Trabajar todas las peticiones que se pida, express

app
  .get('/', (req, res) => res.end('<h1>Hola mundo desde Express</h1>'))
  .listen(3000, () => console.log('Inicializando con Express en el puero 3000'))