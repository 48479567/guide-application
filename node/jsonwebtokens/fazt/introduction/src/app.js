const express = require('express')
const app = express()

// Esto hace que la aplicacion entienda archivos formato JSON y lo transforma a objetos de javascript
app.use(express.json())

// Esto es para formularios y que lo interprete el API
app.use(express.urlencoded({ extended: false }))

app.use(require('./controllers/auth.controller'))


module.exports = app;