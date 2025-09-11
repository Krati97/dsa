// LC Problem 231: Power of Two

// EXPLANATION:
// 2^0 = 1 => true
// 2^1 = 2 => true
// 2 ^ nothing = 3, so 3 results into false
// 2^2 = 4 => true
// 2 ^ nothing = 5. so 5 results into false

function powOfTwo(n){

    if(n == 1) return true;

    if(n < 1 || (n % 2 !==0 )) return false;

    return powOfTwo(n/2);
}

console.log(powOfTwo(1)); // true
console.log(powOfTwo(2)); // true
console.log(powOfTwo(3)); // false
console.log(powOfTwo(4)); // true
console.log(powOfTwo(5)); // false

// output:
// true
// true
// false
// true
// false