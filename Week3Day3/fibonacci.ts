// program to find fibonacci series

function fibonacci(num:number):number
{
    if(num < 2) {
        return num;
    }
    else {
        let result = fibonacci(num-1) + fibonacci(num - 2);
        return result;
    }
}
// to print fibonacci series 

    for(let i = 0; i < 10; i++) {
        console.log(fibonacci(i));
    }