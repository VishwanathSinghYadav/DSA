can concat
Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.

canConcat("oneisnone", ["one", "none", "is"]); // -> true
canConcat("oneisnone", ["on", "e", "is"]); // -> false
canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
canConcat("santahat", ["santah", "hat"]); // -> false
canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
canConcat("fooisgood", ["foo", "is", "g", "ood", "f"]); // -> true

solution - 

solution
dynamic programming with memoization
const canConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  
  if (s.length === 0) return true;
  
  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      if (canConcat(suffix, words, memo)) {
        memo[s] = true;
        return true
      }
    }
  }
  
  memo[s] = false;
  return false;
};
s = length of string
w = # of words
Time: ~O(sw)
Space: O(s)