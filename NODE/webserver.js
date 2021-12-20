var http = require('http');

http.createServer( function(request, response) {
    response.write("this is my first script in webserver"); //writes into temporary buffer
    response.end(); //without this the server will keep waiting without writing to client
} ).listen(8001);

console.log("Server is listening on http://localhost:8001/index.html")

