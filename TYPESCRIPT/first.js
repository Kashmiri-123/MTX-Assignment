var first = 0, second = 1;
console.log(first, second);
function Fibonacci(num) {
    for (var i = 1; i < num; i++) {
        var temp = first + second;
        first = second;
        second = temp;
        console.log(second);
    }
}
Fibonacci(6);
