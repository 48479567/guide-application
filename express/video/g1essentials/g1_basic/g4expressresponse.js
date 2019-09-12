const express = require('express'),
  app = express()

app
  .get('/', (req, res) => {
    // Cuando haces el metodo end eso quiere decir que ya se termino la ejecuion de peticion usuario servidor, diferente modo es 'send'
    res.send('<h1>Hola Mundo desde Express.js</h1>')
  })
  .get('/escuela-digital', (req, res) => {
    // res.send('<h1>HOla Escuela Digital</h1>')
    //redireccionamiento con 301 que es permanente
    res.redirect(301,'https://ed.team')
  })
  .get('/otrointerno', (req, res) => {
    // Como se ve la redireccion se denota desde la parte interna y externa por ello se ven en el administrador del navegador web en la parte de network como el tipo de redireccinamiento
    res.redirect(301,'/')
  })
  .get('/json', (req, res) => {
    //Peticion formato json y trabajar internamente con jsonstringyfy para trabjar con el archivo y generar vistas acorde
    res.json({
      name: 'Sergio',
      age: '2544',
      email: '48479567.sjep@gmail.com'
    })
  })
  .get('/render', (req, res) => {
    //Express renderiza template como ejs, pug, moustache, etc
    res.render(`${__dirname}/index.html`)
    // Esto manda error, por que el metodo render trabaja con algun sistema de template, render no trabaja sobre archivos estaticos, express nos recomienda una serie de herramientas como un stack tool kit para trabaja de forma mas agil, instalados de forma global... ver descripcion general de express

  })
  



  .listen(3000, () => console.log('Ejcutandose práctica Número 4'))
  //Funciona tambien con 4000 u otros pero 3000 por ahora que es el estandar

  // puedes hacer redirecciones