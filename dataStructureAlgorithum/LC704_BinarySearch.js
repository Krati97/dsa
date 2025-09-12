// LC Problem 704: Binary Search

let arr = [-1, 4, 5, 9, 13] // ******* Binary search works only for sorted array *******
let target = 9;

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(right >= left){
        let middle = Math.floor((left + right)/2);

        if ( target == arr[middle]) {return middle;}
        else if (target < arr[middle]){
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }

    return -1;
}


console.log(binarySearch(arr, target)); // output: 3
console.log(binarySearch([1,2,3,4,5], 5)); // output: 4

