// LC problem 344:

var reverseString = function(s) {
    
    let n = s.length // to get the length of the array

    let arrayLenHalf = Math.floor(s.length/2) // to get half of the array length

    // loop through the half of the array. for odd numbers we use math.floor to not touch the middle element
    for(let i = 0; i < arrayLenHalf; i++){
        // swap the elements
        let temp = s[i]; // store the current element in temp
        s[i] = s[n - 1 - i]; // swap the current element with the element at the end
        s[n - 1 - i] = temp // swap the element at the end with the current element
    }

    return s;
};

console.log(reverseString(["h","e","l","l","o"])) // ["o","l","l","e","h"]

