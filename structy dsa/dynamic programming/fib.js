fib
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

Solve this recursively.

fib(0); // -> 0
fib(1); // -> 1
fib(2); // -> 1
fib(3); // -> 2
fib(4); // -> 3
fib(5); // -> 5
fib(35); // -> 9227465
fib(46); // -> 1836311903

solution -

solutions
brute-force (timeout)
const fib = (n) => {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n - 2);
};
Time: O(2^n)
Space: O(n)
memoized (pass)
const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n;

  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
Time: O(n)
Space: O(n)