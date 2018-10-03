var express = require('express');
var app = express();
var path = require('path');


app.get('/', function (req, res) {
  res.sendFile(path.join('/home/aa/Desktop/comIT/server/index.html'));
});
app.get('/productos.html', function (req, res) {
  res.sendFile(path.join('/home/aa/Desktop/comIT/server/productos.html'));
});





app.listen(3000); 