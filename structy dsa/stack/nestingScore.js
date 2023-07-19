nesting score
Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.

nestingScore("[]"); // -> 1
nestingScore("[][][]"); // -> 3
nestingScore("[[]]"); // -> 2
nestingScore("[[][]]"); // -> 4
nestingScore("[[][][]]"); // -> 6
nestingScore("[[][]][]"); // -> 5
nestingScore("[][[][]][[]]"); // -> 7
nestingScore("[[[[[[[][]]]]]]][]"); // -> 129

solution-

const nestingScore = (str) => {
  
    const stack = [0];
    
    for(let char of str){
      if(char === '['){
        stack.push(0);
      }else{
        if(stack[stack.length-1] ===0){
          stack.pop();
          stack[stack.length-1] = stack[stack.length-1] + 1;
        }else{
          let popped = stack.pop();
          stack[stack.length-1] = stack[stack.length-1] + popped * 2;
        };
      };
    };
    return stack.pop();
  };

  n = length of string
Time: O(n)
Space: O(n)