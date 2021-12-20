var myArray = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var smallest = myArray[0];
for (var i in myArray) {
    if (smallest > myArray[i]) {
        smallest = myArray[i];
    }
}
console.log("the smallest element is " + smallest);
