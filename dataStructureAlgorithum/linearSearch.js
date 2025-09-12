// LC Problem 704: Linear Search

let arr = [4,9,1,0,2]
let target = 0;

function linearSearch(arr, target){

    for( let i = 0; i < arr.length; i++){
        if( arr[i] === target ){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, target)); // output: 3
console.log(linearSearch([1,2,3,4,5], 6)); // output: -1
