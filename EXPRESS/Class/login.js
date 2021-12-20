var express = require('express');

var app = express();
app.use(express.json());

app.post("/login", function(req, res) {
    console.log("Log In...");

    var uid = req.body.uid;
    var pwd = req.body.password;
    console.log(`.. ${uid} and ${pwd}`);
    console.log(req.body);

    var strToReturn = "You are not a valid user";

    if(uid == 'kashmiri' && pwd == 'admin')
        strToReturn = "Login success";
    res.send(strToReturn);
})

app.listen(8000, function() {
    console.log("Server running...");
})