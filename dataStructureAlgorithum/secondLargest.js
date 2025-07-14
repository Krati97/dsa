// Write a function that returns the second largest number in an array:
function SecondLargest(arr){
    if(arr.length < 2) return null;
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i =0; i<arr.length; i++){
        if(arr[i] > firstLargest ){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i]
        }
    }return secondLargest;
}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(SecondLargest(array)); // returns 9

let array2 = [1];
console.log(SecondLargest(array2)); // returns null

let array3 = [1,2,3,4,5,6,7,8,9,10,10]; // => duplicate values handeled
console.log(SecondLargest(array3)); // returns 9

let array4 = [-8, -7, -4, -2]; // => negative values handeled
console.log(SecondLargest(array4)); // returns -4


