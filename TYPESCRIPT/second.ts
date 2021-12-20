function factorial(n : number) : number 
{
    //base case
    if(n == 0 || n == 1){
        return 1; 
    }
    else{
        return n * factorial(n-1);
    }
}
let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));