/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet=new Set();
    for(var x of nums) {
    if(numSet.has(x)){
        return true
    }
    else{
        numSet.add(x)
    }
    }

return false;
    
};