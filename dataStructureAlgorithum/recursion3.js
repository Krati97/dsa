// Find the sum of n numbers using recursion:


function print(x) {
    if(x == 0) return 0;

    return x + print(x-1);

}

console.log(print(5)); // return 15
