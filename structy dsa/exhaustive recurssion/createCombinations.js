create combinations
Write a function, createCombinations, that takes in an array and a length as arguments. The function should return a 2D array representing all of the combinations of the specifized length.

The items within the combinations and the combinations themselves may be returned in any order.

You may assume that the input array contains unique elements and 1 <= k <= items.length.

createCombinations(["a", "b", "c"], 2); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]
createCombinations(["q", "r", "s", "t"], 2); // ->
// [
//   [ 'q', 'r' ],
//   [ 'q', 's' ],
//   [ 'q', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 't' ],
//   [ 's', 't' ]
// ]
createCombinations(['q', 'r', 's', 't'], 3)); // ->
// [
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 's', 't' ],
//   [ 'r', 's', 't' ]
// ]
createCombinations([1, 28, 94], 3); // ->
// [
//   [ 1, 28, 94 ]
// ]

solution -

solutions
recursive
const createCombinations = (items, k) => {
  if (items.length < k) return [];

  if (k === 0) return [[]];

  const first = items[0];
  const combosWithFirst = [];
  for (let combo of createCombinations(items.slice(1), k - 1)) {
    combosWithFirst.push([first, ...combo]);
  }

  const combosWithoutFirst = createCombinations(items.slice(1), k);
  return [...combosWithFirst, ...combosWithoutFirst];
};
n = length of items
k = target length
Time: ~O(n choose k)
Space: ~O(n choose k)
Note: "n Choose k" refers to the binomial coefficient.