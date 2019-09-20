'use strict'

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//      Cargar archivos rutas


//      Middlewares
//      Esta linea es solo configuracion para bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//      Esto convierte los datos en JSON
app.use(bodyParser.json());

const appSet = app.use(bodyParser.json());
console.log()
//      CORS


//      Rutas
app.get('/test', (req, res) =>
{
    res.status(200).send(
    {
        message: "Hola Mundo desde mi API de NodeJS"
    });
});


//      Exportar
module.exports = { app };