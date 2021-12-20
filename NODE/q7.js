var fs = require('fs');
var readline = require('readline-sync');

var searchStr = readline.question("Enter the string you want to search ");

fs.readFile('input.txt', function(error, data) {
    found = false;

    var str = data.toString();
    var strArray = str.split(" ");
    strArray = strArray.map(s => s.toUpperCase());

    if(strArray.includes(searchStr.toUpperCase()))
    {
        var count = strArray.reduce((count, x) => (
            x==searchStr.toUpperCase() ? count+1 : count 
        ),0)
        console.log("Count " + count)
    }
    else{
        console.log("String not present")
    }
})