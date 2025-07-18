/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0){
        return false;
    }

    let xCopy = x;
    let reverse = 0; 
    while(x>0){
      let remainder = x % 10;
      reverse = (10*reverse) + remainder;
      x = Math.floor(x/10);
    }

    if(reverse === xCopy) {
      return true;
    }
    else {return false;}

    // return reverse == xCopy
};

console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(122));   // false
console.log(isPalindrome(1221));  // true
