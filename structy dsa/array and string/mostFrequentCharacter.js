most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'

solution

solution
using a hashmap (object)
const mostFrequentChar = (s) => {
  const count = {};
  
  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1
  }
  
  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }
  return best;
};
n = length of string
Time: O(n)
Space: O(n)

also solution -->

//   create a count map
const countChar = {};
  
// itterate through our string and store count for each character

  for(let char of s){
    if(!(char in countChar)){
      countChar[char] = 0;
    }
    countChar[char] += 1
  }
  
// iterrate our map again, check for the first char for the biggest countChar

  let  best = null;
  for(let char of s){
    if(best === null || countChar[char] > countChar[best]){
      best = char;
    }
  }
  
  return best;