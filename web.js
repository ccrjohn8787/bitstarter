var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var response_str = buf.toString(fs.readFileSync('index.html'));
  response.send(response_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
