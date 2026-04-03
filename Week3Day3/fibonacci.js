"use strict";
// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        let result = fibonacci(num - 1) + fibonacci(num - 2);
        return result;
    }
}
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}
