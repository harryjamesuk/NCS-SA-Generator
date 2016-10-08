var express = require('express');
var app = express();
var fs = require('fs');

// Create web server
const http = require('http');
var server = http.Server(app);
server.listen(process.env.PORT || 3000);

// Public dirs
app.use(express.static('public'));
app.use('/js', express.static('www/js'));
app.use('/css', express.static('www/css'));
app.use('/lib/ionic', express.static('www/lib/ionic'))

app.get('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  var view = fs.readFileSync("./www/index.html", {encoding: "utf-8"});
  res.write(view);

  res.end();
});
