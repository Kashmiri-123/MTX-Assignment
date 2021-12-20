function insertionSort(numberList) {
    if (numberList) {
        var listToSort = numberList;
        var i = 0, j = 0, len = listToSort.length, holePosition = 0, valueToInsert = 0;
        for (i = 0; i < len; i++) {
            valueToInsert = listToSort[i]; /* select value to be inserted */
            holePosition = i;
            /*locate hole position for the element to be inserted */
            while (holePosition > 0 && listToSort[holePosition - 1] > valueToInsert) {
                listToSort[holePosition] = listToSort[holePosition - 1];
                holePosition = holePosition - 1;
            }
            listToSort[holePosition] = valueToInsert; /* insert the number at hole position */
        }
        console.log(listToSort);
    }
}
var myarray = [2, 1, 5, 3, 9, 8];
insertionSort(myarray);
