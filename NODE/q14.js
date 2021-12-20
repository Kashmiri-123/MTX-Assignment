var http = require('http');

//server with json data
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'application/json'})
   var data = {
        id: 1,
        name: "Kashmiri",
        dept: "IT"
   };
   response.write(JSON.stringify(data))
   response.end();
}
).listen(8081);


console.log('Server running at http://localhost:8081/getData');