var fs = require('fs');

//create a file named fl2_mynewfile1.txt:
fs.appendFile('fl2_mynewfde6.html', '<h1>Archivo Creado en HTml!</h1>', function (err){
  if (err) throw err;
  console.log('Saved!');
});
/*
El fs.appendFile()método agrega el contenido especificado a un archivo.
Si el archivo no existe, se creará el archivo:
*/
// falta hacer su ejecucion
