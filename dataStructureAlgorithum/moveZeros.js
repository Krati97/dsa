// LC problem 283:

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x = 0;
    
    for(let i = 0; i < nums.length; i++){
        if( nums[i] != 0){
            nums[x] = nums[i];
            x++;
        }
    }

    for( let j = x; j < nums.length; j++){
        nums[j] = 0;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0,0,1])); // [1,0,0]
