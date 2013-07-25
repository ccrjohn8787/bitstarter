var express = require('express');
var fs = require('fs');
var buf = new Buffer(1048576);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
  var response_str = buf.toString();
  response.send(response_str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
