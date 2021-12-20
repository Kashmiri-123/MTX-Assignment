var express = require('express');

var app = express();

app.get("/", function(req, res) {
    console.log("Logging...");

    // res.end('<h1>hi</h1>')
    res.end();
    res.send('<h1>This is the login method</h1>'); //sends content type to client from server,ie, html /css/ json

})

app.listen(8000, function() {
    console.log("Server running...");
})