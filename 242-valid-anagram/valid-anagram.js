/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!=t.length) return false;
    if(s.length ==0 && t.length==0) return true;
   
    const anagramMap= new Map();

    
    for(ch of s)
    {
        if(anagramMap.has(ch))
        {
           anagramMap.set(ch,anagramMap.get(ch) +1)

        }
        else
        {
        anagramMap.set(ch,1)  
        }
        
    }

    
   

    for (ch of t)
    {

        if( !anagramMap.has(ch) || anagramMap.get(ch)==0 ) return false;
        
        anagramMap.set(ch,anagramMap.get(ch) -1)

    }
    return true;
};