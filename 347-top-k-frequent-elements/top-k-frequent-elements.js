/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    if(nums.length==1) return nums;

    const frequency = new Map();
    for (let i=0;i<nums.length;i++)
    {
        if(frequency.has(nums[i]))
        {
            frequency.set(nums[i],frequency.get(nums[i])+1)

        }
        else
        {
            frequency.set(nums[i],1);
        }
    }

    var x=[...frequency.entries()].sort((a, b) => b[1] - a[1]);

    var result=[]
    for (let i=0;i<k;i++)
    {
        result.push(x[i][0])
    }

    return result;


    
};