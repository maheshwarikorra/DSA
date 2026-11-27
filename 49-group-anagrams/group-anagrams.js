/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const anagramMap = new Map();


    for(let i=0;i<strs.length;i++)
    {

        let sortedKey= strs[i].split('').sort().join('')
        if(anagramMap.has(sortedKey))
        {
            anagramMap.get(sortedKey).push(strs[i]);

        }
        else
        {
             anagramMap.set(sortedKey,[strs[i]]);

        }

    }
    return [...anagramMap.values()]
    
};