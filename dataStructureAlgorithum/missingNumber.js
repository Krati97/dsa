// LC Problem 268:

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let largestConsecutive = nums.length;
    console.log("Largest Consecutive: ", largestConsecutive);
    let numsSum = 0;
    let ConsecutiveSum = (largestConsecutive * (largestConsecutive + 1)) / 2
    console.log("Consecutive Sum: ", ConsecutiveSum);

    // find sum of nums array
    for(let i = 0; i < nums.length; i++){
        numsSum = numsSum + nums[i];
        }
    console.log("Nums Sum: ", numsSum);
    console.log("Missing Number: ", ConsecutiveSum - numsSum); 
    return ConsecutiveSum - numsSum;
    
};

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8

