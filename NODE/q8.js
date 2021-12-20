var fs = require("fs");
var data = "";

var readerStream = fs.createWriteStream("input.txt", {flags: 'a'});
var data = "hello"
readerStream.write(data, function(){
    console.log("Done..")
})
