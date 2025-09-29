/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {};
    for( let i = 0 ; i < nums.length ; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
            hash[nums[i]] ++
        }
    }
    return Object.keys(hash).find( i => hash[i] == 1 )
};

console.log(singleNumber([2,2,1]))