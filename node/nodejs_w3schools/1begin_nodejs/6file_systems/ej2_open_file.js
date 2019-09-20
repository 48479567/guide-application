var fs = require('fs');

//create an empty file named fl3_mynewfile2.txt:
fs.open('fl3_mynewfile2.txt', 'w', function(err, file){
  if (err) throw err;
  console.log('Saved!');
});

/*
El fs.open()método toma una "bandera" como segundo argumento, si la bandera es "w" para "escribir",
el archivo especificado se abre para escribir. Si el archivo no existe, se crea un archivo vacío
*/

//falta ejecutar
