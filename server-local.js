var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./dist/");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(3080);
/*const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('certs/key1.pem'),
  cert: fs.readFileSync('certs/key2.pem')
};

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./dist/");

https.createServer(options, (req, res) => {
  var done = finalhandler(req, res);
  serve(req, res, done);
}).listen(3080);*/