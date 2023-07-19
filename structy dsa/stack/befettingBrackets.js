befitting brackets
Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }

befittingBrackets('(){}[](())'); // -> true
befittingBrackets('({[]})'); // -> true
befittingBrackets('[][}'); // -> false
befittingBrackets('{[]}({}'); // -> false
befittingBrackets('[]{}(}[]'); // -> false
befittingBrackets('[]{}()[]'); // -> true
befittingBrackets(']{}'); // -> false
befittingBrackets(''); // -> true
befittingBrackets('{[(}])'); // -> false

solution - 

solution
using a stack
const befittingBrackets = (str) => {
  const stack = [];
  
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of str) {
    if (char in brackets) {
      stack.push(brackets[char]);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};
n = length of string
Time: O(n)
Space: O(n)