
function factorial(n: number): number {
    if (n < 0) {console.log("Invalid Negative Input")} // error for negative numbers
   
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
   
}


// printing the factorial
console.log(factorial(6)); // Output: 720

//console.log(factorial(-6)); // Invalid Negative Input
