/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    if(nums.length ==0 )return false;
    if(nums.length ==1 && target == nums[0]) return true;

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