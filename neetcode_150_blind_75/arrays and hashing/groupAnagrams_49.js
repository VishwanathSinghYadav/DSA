49. Group Anagrams
Medium
16.3K
462
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

solution -

var groupAnagrams = function(strs) {
  
    const res = {};

    for(let str of strs){
        let count = new Array(26).fill(0);
        for(let char of str){
            count[char.charCodeAt()- 97] = count[char.charCodeAt()- 97] + 1;
        }
        let key = count.join('#');
        if(key in res){
            res[key].push(str)
        }else{
            res[key] = [str]
        }
    }

return Object.values(res);
//time complexity O(n*k) string length * each word length
// space complexity O(n)

// 

    //// sort... duplicate check
    // const answer = [];
    // const container = {};

    // for(let i = 0; i<strs.length; i++){

    //     let sortedStr = strs[i].split('').sort().join(',');
    //     if(sortedStr in container){
    //         container[sortedStr].push(strs[i]);
    //     }else{
    //         container[sortedStr] = [strs[i]];
    //     }
        
    // }

    // return(Object.values(container))
};