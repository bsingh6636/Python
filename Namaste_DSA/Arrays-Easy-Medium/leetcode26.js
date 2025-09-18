/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueIndex = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > nums[uniqueIndex]){
            uniqueIndex += 1;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
};

removeDuplicates([0 ,0, 0,1 ,2 ,3, 3,4 , 5])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])