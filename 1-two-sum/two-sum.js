/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const twoSumSet= new Map();

    for (var i=0; i < nums.length; i++)
    {
        
        if(!twoSumSet.has((target-nums[i])))
        {
            twoSumSet.set(nums[i],i)
        }
        else
        {
            return [i,twoSumSet.get(target-nums[i])];

        }
    }
    
};