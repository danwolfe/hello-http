var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
<<<<<<< HEAD
  res.end('Hello Http!!!');
=======
  res.end('Hello Http');
>>>>>>> a61a817... Added initial commit to hello_http repo
});
server.listen(8080);
