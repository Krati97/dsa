// LC problem 88:

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0;

    for(let i = 0; i < (m+n); i++){
        if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else{
            nums1[i] = nums2[p2];
            p2++
        }
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
