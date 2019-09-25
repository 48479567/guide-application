# Fazt JSONWebTokens

  - [Fuente](https://www.youtube.com/watch?v=qckBlIfOnlA&feature=youtu.be&fbclid=IwAR0-WYN1c3aLt8iduosVmsYW4IonEtqPstbb2QbEMKdBFNKtHGJxbyEBtJU)
  - [Autor: Fazt Code](https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA)


## Hace uso de los modulos NPM: 

  - Desarrollo
    - nodemon

  - Producción
    - mongoose
    - express
    - jsonwebtoken
    - bcryptjs

## Herramientas

  1. Testeo de Peticiones al Servidor
    - [Insomnia](https://insomnia.rest/)
  2. Alojamiento de Base de Datos Local de Prueba
    - [Robo3T](https://robomongo.org)


## Para la conexion al modulo principal, poner en el archivo package.json
```
"scripts": {
  "dev": "nodemon ./node/jsonwebtokens/fazt/introduction/src/index.js",
  "start": "node ./node/jsonwebtokens/fazt/introduction/src/index.js"
}

```

### Puntos Importantes
  1. *En la parte de json web tokens, cuando se hace una solicitud con el token correcto se debe mandar por medio de headers con el nombre de propiedad, x-access-token, si esto es correcto entonces el servidor debe permitir hacer peticiones, caso contrario no.*

