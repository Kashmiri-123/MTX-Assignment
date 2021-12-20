function bubbleSort(array) {
    array = array.slice();
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    console.log(array);
}
var myarray = [2, 1, 5, 3, 9, 8];
bubbleSort(myarray);
