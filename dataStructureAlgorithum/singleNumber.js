// LC Problem 136:


// Approach 1: Hash Map
// Maintain a hash map of all the numbers and their counts
// Return the number with count 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};

    for( let i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for( let i = 0; i < nums.length; i++){
        if (hash[nums[i]] === 1){
            return  nums[i];
        }
    }
};

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1


// Approach 2: Math
// Use the property of XOR

var singleNumber2 = function(nums) {
let xor = 0;
for( let i = 0; i < nums.length; i++){
    xor = xor ^ nums[i];
 }
 return xor;
};

console.log("Solution using Xor: ",singleNumber2([5,1,3,4,5,1,3])); // Solution using Xor:  4
