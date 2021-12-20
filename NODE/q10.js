// folder -> text file -> delete text file --> delete director

var fs = require('fs');

fs.mkdirSync('Folder1')
console.log('Directory created!!')

fs.unlinkSync('Folder1/file.txt',function(error){
    console.log('Error deleting file')
})

fs.rmdirSync('Folder1')
console.log('Directory deleted!!')
