//https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {

    // //using sorting 
    // a=s.split('');
    // b=t.split('');
    // console.log(a,b)
    // return(a.sort().join() === b.sort().join())

    if(!(s.length === t.length)) return false;
    const container = {};

    for(let char of s){
        if(char in container){
            container[char] = container[char] +1;
        }
        else{
            container[char] = 0;
        }
    }
    for(let char of t){

            container[char] = container[char] -1;
        
    }
    return((Object.values(container).filter(a => a!==-1)).length===0)
};
