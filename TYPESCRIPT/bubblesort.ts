function bubbleSort(array: number[]) {
    array = array.slice(); 

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {

            if(array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    console.log (array);
}

var myarray = [2,1,5,3,9,8]
bubbleSort(myarray)