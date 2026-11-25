/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!=t.length) return false;
    if(s.length ==0 && t.length==0) return true;
   
    const anagramMap= new Map();
    const anagramSet= new Map();
    for(ch of s)
    {
        if(!anagramSet.has(ch))
        {
            anagramSet.set(ch,1)
        }
        else
        {
           let count =anagramSet.get(ch) +1;
           anagramSet.set(ch,count)

        }
        
        
    }
   
    
    
    for(ch of t)
    {
        if(!anagramMap.has(ch))
        {
            anagramMap.set(ch,1)
        }
        else
        {
           let count =anagramMap.get(ch) +1;
           anagramMap.set(ch,count)

        }
        
        
    }
   

    for (ch of anagramSet.keys())
    {
        if( !anagramMap.has(ch) ||  anagramSet.get(ch)!=anagramMap.get(ch) ) return false;

    }
    return true;s
};