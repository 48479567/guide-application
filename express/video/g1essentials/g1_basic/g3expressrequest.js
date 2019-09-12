const express = require('express'),
  app = express()

app
  .get('/', (req, res) => res.sendFile(`${__dirname}/hail_to_the_thief.jpg`))
  .get('/console', (req, res) => console.log('Esto se muestra en consola'))
  .get('/users', (req, res) => {
    res
      //Para el juego de Caracteres
      //Solo con  .set({'Content-Type': 'text/html') bastaría
      .set({'Content-Type': 'text/html; charset=utf-8'})
      .end('<h1>Esta en la Sección Usuario')
  })
  //Tambien se puede usar de separador (((/))) ello depende del modo de la construccion de tu sitio web, por ejemplo en wordpress
  .get('/users/:id-:name-:age', (req, res) => { 
    // /user/19-jonmircha-34
    res
      .set({'Content-Type': 'text/html;charset:utf-8'})
      .end(`
      <h1>Hola ${req.params.name}, bienvend@ a Express.js ☻.<h2>
      <p>Tu id de usuario es ${req.params.id}</p>
      <p>Tu edad es ${req.params.age}</p>
      `)
  })
  .get('/search', (req, res) => { 
    // /search?=Una+búsqueda
    res
      .set({'Content-Type': 'text/html;charset=utf-8'})
      .end(`
        <h1>Hola ${req.params.name}, bienvend@ a Express.js ☻.<h2>
        <p>Los resultados de la Búsqueda es <mark>${req.query.s}</mark></p>
        <p>Tu edad es ${req.query.age}</p>
        `)
  })
  .get('', (req, res) => { })

  // este es el ultimo metodo, obligatoriamente
  .listen(3000, () => console.log('Servidor corriendo'))