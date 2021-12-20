var fs = require('fs');
var readline = require('readline-sync');

// var searchStr = readline.question("Enter the string you want to search ");

// fs.readFile('input.txt', function(error, data) {
//     found = false;

//     var str = data.toString();
//     var strArray = str.split(" ");
//     strArray = strArray.map(s => s.toUpperCase());

//     if(strArray.includes(searchStr.toUpperCase()))
//     {
//         console.log("String is present");
//     }
//     else{
//         console.log("String not present")
//     }
// })

//OR

var searchStr = readline.question("Enter the string you want to search ");
var ReaderStream = fs.createReadStream('input.txt');

ReaderStream.on('data', function(data) {
    data = data.toString();
    var index = data.indexOf(searchStr)
    if(index == -1){
        console.log("No search string found")
    }
    else{
        console.log("Found at " + index)
    }
})
