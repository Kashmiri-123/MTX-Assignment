var fs = require("fs");
var Data = "";

// var readerStream = fs.createReadStream("input.txt");
// var writerStream = fs.createWriteStream("output.txt");

// readerStream.on("data", function(readData){
//     Data = readData.toString()
//     writerStream.write(Data);
// })

// readerStream.on("end", function(){
//     console.log("Data read is done")
// })

// readerStream.on("error", function(){
//     console.log("Error in reading")
// })

//OR
var readerFile = 'input.txt';
var writerFile = "output.txt";

fs.copyFile(readerFile, writerFile, function(error) {
    if(error){
        console.log(error)
    }
    else{
        console.log("data writen")
    }
})


