var express = require('express');
var app = express();

// Create web server
const http = require('http');
var server = http.Server(app);
server.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('www/index.html');
  res.end();
});
