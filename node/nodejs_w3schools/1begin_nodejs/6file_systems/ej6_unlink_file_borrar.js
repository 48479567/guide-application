var fs = require('fs');

//este metodo borrara al archivo fl3_mynewfile2

fs.unlink('fl3_mynewfile2.txt', function(err){
  if (err) throw err;
  console.log('Archivo Borrado');
});

/*
Para eliminar un archivo con el módulo Sistema de archivos, use el fs.unlink() método.
El fs.unlink()método elimina el archivo especificado:
*/

//falta su ejecutor
