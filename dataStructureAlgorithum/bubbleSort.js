// Bubble sort

let arr = [5, 4, 9, 1, 0];

function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){

        for (let j = 0; j < n - 1 - i; j++){
            if( arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr)); // output: [0, 1, 4, 5, 9]
