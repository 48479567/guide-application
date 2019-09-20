var fs = require('fs');

//este metodo renombra al archivo con el nombre de fl4_mynewfile3 a fl3_mynewfile2.html
// si no existe el archivo a encontrar manda error.
fs.rename('fl4_mynewfile3.txt', 'fl3_mynewfile2.txt', function (err) {
  if(err) throw err;
  console.log('Archivo Renombrado!!!');
});

/*
Para cambiar el nombre de un archivo con el módulo Sistema de archivos, use el fs.rename() método.
El fs.rename()método cambia el nombre del archivo especificado:
*/

//falta ejecutor
