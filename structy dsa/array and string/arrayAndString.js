Problem - 
max value

Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.

maxValue([4, 7, 2, 8, 10, 9]); // -> 10
maxValue([10, 5, 40, 40.3]); // -> 40.3
maxValue([-5, -2, -1, -11]); // -> -1
maxValue([42]); // -> 42
maxValue([1000, 8]); // -> 1000
maxValue([1000, 8, 9000]); // -> 9000
maxValue([2, 5, 1, 1, 4]); // -> 5

Solution - 

solution
const maxValue = (nums) => {
  let maximum = -Infinity;
  
  for (let num of nums) {
    if (num > maximum) maximum = num;
  }
  
  return maximum;
};
n = length of array
Time: O(n)
Space: O(1)