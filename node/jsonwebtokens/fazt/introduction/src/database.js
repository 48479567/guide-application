const mongoose = require('mongoose')

//Esto por el protocolo de conexion de mongoDB por ello el inicio
mongoose.connect('mongodb://localhost/jsonwebtokens', {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(db => console.log(`Database connected with version ${db.version}`))

