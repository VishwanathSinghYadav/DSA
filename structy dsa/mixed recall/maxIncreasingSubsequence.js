max increasing subseq
Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. The function should return the length of the longest subsequence of strictly increasing numbers.

A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.

const numbers = [4, 18, 20, 10, 12, 15, 19];
maxIncreasingSubseq(numbers); // -> 5
const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
maxIncreasingSubseq(numbers); // -> 4
const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70];
maxIncreasingSubseq(numbers); // -> 5
const numbers = [7, 14, 10, 12];
maxIncreasingSubseq(numbers); // -> 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
maxIncreasingSubseq(numbers); // -> 21
const numbers = [
  1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,
  104,
];
maxIncreasingSubseq(numbers); // -> 23
const numbers = [
  1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16,
  17, 18, 19, 20, 21, 100,101 ,102, 103, 104, 105
];
maxIncreasingSubseq(numbers); // -> 27

solution 

solution
dynamic programming with memoization
const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
  const key = i + ',' + previous;
  if (key in memo) return memo[key];
  if (i === numbers.length) return 0;

  const options = [];
  const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  options.push(dontTakeCurrent);
  
  const current = numbers[i];
  if (current > previous) {
    const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(takeCurrent);
  }
  
  memo[key] = Math.max(...options);
  return memo[key];
};
n = length of array
Time: O(n^2)
Space: O(n^2)