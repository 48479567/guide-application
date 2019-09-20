var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req, res){
  if(req.url == '/w3cschools_nodejs/10fileupload/archivos_descargados') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Asus/w3schools_nodejs/10fileupload/archivos_descargados/' + files.fileupload.name;
      fs.rename(oldpath, newpath, function (err){
        if (err) throw err;
        res.write('El archivo fue cargado y movido!!!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="archivos_descargados" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="archivos_descargados"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
