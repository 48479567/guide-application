
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer( function (req, res){
  if (req.url == '/muestra_de_resultado'){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.ftu.path;// viene de la linea 21 resumido de filetoupload
      var newpath = 'C:/Users/ASUS/nodejs_w3schools/10upload_files/archivos_descargados/' + files.ftu.name;// viene de la linea 21 resumido de filetoupload
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('El Archivo fue cargado y movido!!!!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="muestra_de_resultado" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="ftu"><br>'); //importante nombre igual para la linea 10 y 11
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);


//C:\Users\ASUS\nodejs_w3schools\10upload_files>node demo.js
