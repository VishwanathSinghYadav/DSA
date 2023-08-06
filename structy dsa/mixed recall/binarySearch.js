binary search
Write a function, binarySearch, that takes in a sorted array of numbers and a target. The function should return the index where the target can be found within the array. If the target is not found in the array, then return -1.

You may assume that the input array contains unique numbers sorted in increasing order.

Your function must implement the binary search algorithm.

binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6); // -> 6
binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27); // -> -1
binarySearch([0, 6, 8, 12, 16, 19, 20, 28], 8); // -> 2
binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28); // -> 8
binarySearch([7, 9], 7); // -> 0
binarySearch([7, 9], 9); // -> 1
binarySearch([7, 9], 12); // -> -1
binarySearch([7], 7); // -> 0
binarySearch([], 7); // -> -1

solution 

solution
binary search
const binarySearch = (numbers, target) => {
  let lo = 0;
  let hi = numbers.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (target < numbers[mid]) {
      hi = mid - 1;
    } else if (target > numbers[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
n = length of numbers array
Time: O(logn)
Space: O(1)