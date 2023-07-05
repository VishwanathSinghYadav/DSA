Problem-
is prime
Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.

isPrime(2); // -> true
isPrime(3); // -> true
isPrime(4); // -> false
isPrime(5); // -> true
isPrime(6); // -> false
isPrime(7); // -> true
isPrime(8); // -> false
isPrime(25); // -> false
isPrime(31); // -> true
isPrime(2017); // -> true
isPrime(2048); // -> false
isPrime(1); // -> false
isPrime(713); // -> false

Solution - 

solution
const isPrime = (n) => {
  if (n < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  
  return true;
};
n = input number
Time: O(square_root(n))
Space: O(1)