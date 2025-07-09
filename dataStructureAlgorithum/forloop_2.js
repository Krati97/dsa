// Function that searches for an element in an array and returns the index, if element isnt there return -1.
arr = [4, 10, 7, 9, 15, 67]

function searchElement(array, element){
    for(let i=0; i<array.length; i++){
        if (arr[i] == element){return i;}
    }
    return -1;
}
console.log("*************************");
console.log(searchElement(arr, 4)); // 0
console.log(searchElement(arr, 10)); // 1
console.log(searchElement(arr, 7)); // 2
console.log(searchElement(arr, 67)); // 5
console.log(searchElement(arr, 100)); // -1
console.log("*************************");

// Write a fnction that returns the count of negative numbers in an array
function countNegatives(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}
let arrayWithNegatives = [1, 2, 3, -4, 5, -6];
console.log("Count of negative numbers: ", countNegatives(arrayWithNegatives)); // Count of negative numbers: 2
console.log("*************************")

// Write a function that returns the largest number in an array:
function largestNumber(arr){
    let largestNum = arr[0]; // ot let largestNum = -Infinity;
    for (let i=0; i<arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i];
        }
    }
    return largestNum;
}
let arr3 = [1, 32, 3, 4, 15, 6, -9];
console.log("Largest number of array: ", largestNumber(arr3)); // 32
console.log("*************************")

// Write a function that returns the smallest number in an array:
function smallestNumber(arr){
    let smallestNum = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i] < smallestNum){
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}
let arr4 = [1, 32, 3, 4, 15, 6, -9];
console.log("Smallest number of array: ", smallestNumber(arr4)); // -9
console.log("*************************")

    