var fs = require('fs');
var readerStream = fs.createReadStream('input.txt');
var fileData = "";

// readerStream.on('data', function(data){
//     fileData = data;
// })
readerStream.on('data', function(error, data) {
    if(error){
        console.log(error);
    }
    else{
        var words = data.toString().split(" ").length - 2;
        var lines = data.toString().split("\n").length -1

        console.log("Number of characters: " + data.toString().length)
        console.log("Number of words: " + words)
        console.log("Number of lines: " + lines)
    }
})