var fs = require('fs');

//create a file named fl4_mynewfile3.txt:
fs.writeFile('fl4_mynewfile3.txt', 'Hello-Content', function(err){
  if (err) throw err;
  console.log('Salvado');
});

/*
El fs.writeFile()método reemplaza el archivo y el contenido especificado si existe.
Si el archivo no existe, se creará un nuevo archivo, que contiene el contenido especificado:
*/

//Falta su ejecutor
