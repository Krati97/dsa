// Find the number of digits in a given number. 

function countDigit(num){
    // to handle 0
    if(num==0){
        return 1;
    }

    // to handle negative numbers
    num = Math.abs(num);
    let count = 0;

    while(num > 0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

console.log(countDigit(12345)); // 5
console.log(countDigit(0)); // 1
console.log(countDigit(-12345678)); // 8



