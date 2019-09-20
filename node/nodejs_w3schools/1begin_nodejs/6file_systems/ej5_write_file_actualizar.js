var fs = require('fs');

//este metodo reemplazara el contenido al archivo con el nombre fl4_mynewfile3
fs.writeFile('fl4_mynewfile3.txt', 'Este es el nuevo texto.', function(err){
  if (err) throw err;
  console.log('Cambiado!!');
});
 /*
El fs.writeFile()método reemplaza el archivo y el contenido especificado:
 */

 //falta su ejecutor
