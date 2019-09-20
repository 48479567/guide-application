'use strict'

const mongoose = require('mongoose');
const { app } =  require('./index');
const port = 3700;

console.log(app)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() => 
        {
            console.log("Conexion a la base de datos establecida en forma muy bacan...");

            //      Creacion del servidor
            app.listen(port, () => 
            {
                console.log("Servidor corriendo correctamente en la url : localhost:3000");
            });

        })
        .catch(err => console.log(err));