var fs = require('fs');

fs.readFile('input1.txt', function(data, error){
    if(data){
        console.log(data)
    }
    else{
        console.log(error)
    }
})

//OR
var readerStream = fs.createReadStream('input1.txt');
var filedata = "";

readerStream.on('data', function(data){
    filedata = data;
})

readerStream.on('end', function(){
    console.log("hello " + filedata)
})
readerStream.on('error', function(error){
    console.log(error)
})