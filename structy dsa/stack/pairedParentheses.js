paired parentheses
Write a function, pairedParentheses, that takes in a string as an argument. 
The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.

pairedParentheses("(david)((abby))"); // -> true
pairedParentheses("()rose(jeff"); // -> false
pairedParentheses(")("); // -> false
pairedParentheses("()"); // -> true
pairedParentheses("(((potato())))"); // -> true
pairedParentheses("(())(water)()"); // -> true
pairedParentheses("(())(water()()"); // -> false
pairedParentheses(""); // -> true
pairedParentheses("))()"); // -> false

solution - 

solution
using a counter
const pairedParentheses = (str) => {
  let count = 0;
  
  for (let char of str) {
    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      if (count === 0) {
        return false;
      }
      
      count -= 1;
    }
  }
  
  return count === 0;
};
n = length of string
Time: O(n)
Space: O(1)