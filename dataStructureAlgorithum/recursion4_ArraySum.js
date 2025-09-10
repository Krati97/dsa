// Print sum of all numbers in an array using recursion

function printSum(arr) {
    // Base case: if array is empty, return 0
    if (arr.length === 0) return 0;
    
    // Return first element + sum of the rest of the array
    return arr[0] + printSum(arr.slice(1));
}

// Test the function
const testArray = [1, 2, 3, 4, 5];
console.log(`Sum of ${JSON.stringify(testArray)} is:`, printSum(testArray));

// Another test case
const anotherTest = [10, 20, 30];
console.log(`Sum of ${JSON.stringify(anotherTest)} is:`, printSum(anotherTest));

// Second way : easy

let array = [5, 4, 3, 2, 1]
function printSum2(n) {
    if( n==0 ) return array[n];

    return array[n] + printSum2(n-1);
}

console.log(printSum2(4));
    