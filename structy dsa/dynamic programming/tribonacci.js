tribonacci
Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

The 0-th and 1-st numbers of the sequence are both 0.

The 2-nd number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous three numbers.

Solve this recursively.

tribonacci(0); // -> 0
tribonacci(1); // -> 0
tribonacci(2); // -> 1
tribonacci(5); // -> 4
tribonacci(7); // -> 13
tribonacci(14); // -> 927
tribonacci(20); // -> 35890
tribonacci(37); // -> 1132436852

solution -

solutions
brute-force (timeout)
const tribonacci = (n) => {
  if (n === 0 || n === 1) return 0;

  if (n === 2) return 1;

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};
Time: O(3^n)
Space: O(n)
memoized (pass)
const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n === 0 || n === 1) return 0;

  if (n === 2) return 1;

  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
};
Time: O(n)
Space: O(n)