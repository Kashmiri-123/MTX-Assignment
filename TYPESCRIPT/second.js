function factorial(n) {
    //base case
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
