var express = require('express');
var fs = require('fs');
var buf = new Buffer(256);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
  var response_str = buf.toString();
  response.send(response_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
