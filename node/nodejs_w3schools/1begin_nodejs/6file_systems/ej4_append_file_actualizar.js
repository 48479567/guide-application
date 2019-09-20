var fs = require('fs');

//este metodo actualiza al archivo con el nombre fl2_mynewfile1
fs.appendFile('fl2_mynewfile1.txt', 'Este es mi texto.', function(err){
  if (err) throw err;
  console.log('Actualizado!!!');
});

/*
El fs.appendFile()método agrega el contenido especificado al final del archivo especificado:
*/

//falta ejecutor
