// fibonacci series using recursion:

function fibonacci(n) {

    if( n <= 1) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6)); // output: 8
console.log(fibonacci(7)); // output: 13
console.log(fibonacci(0)); // output: 0
