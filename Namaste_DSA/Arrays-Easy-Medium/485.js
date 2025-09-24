// 485. Max Consecutive Ones
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.



// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
        let maxP = 0;
        let p1 = 0;
        let p2 = 0;
        while (p1 < nums.length) {
                if (nums[p1] != 1) {
                        p2 = 0;
                } else {
                        p2++
                        if (p2 > maxP) {
                                maxP = p2
                        }
                }
                p1++
        }

        return maxP;


};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))