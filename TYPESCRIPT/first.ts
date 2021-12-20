let first = 0, second = 1;
    
console.log(first, second);

function Fibonacci(num) {
    for (let i = 1; i < num; i++) {
        let temp = first + second;
        first = second;
        second = temp
        console.log(second);
    }
}
Fibonacci(6);
    