breaking boundaries
Write a function, breakingBoundaries, that takes in 5 arguments: a number of rows (m), a number of columns (n), a number of moves (k), a starting row (r), and a starting column (c). Say you were situated in a grid with dimensions m * n. If you had to start at position (r,c), in how many different ways could you move out of bounds if you could take at most k moves. A single move is moving one space up, down, left, or right. During a path you may revisit a position.

For example:

Given m, n, k, r, c:

3, 4, 2, 0, 0

This input asks us to count the numbers of ways
to move out of bounds in a 3 by 4 grid, starting at
position (0, 0) if we could take at most 2 moves.

The answer is 4 because of these 4 distinct ways:
 1. left
 2. up
 3. right, up
 4. down, left
The function should return a number representing how many ways you can move out of bounds.

breakingBoundaries(3, 4, 2, 0, 0); // -> 4
breakingBoundaries(2, 2, 2, 1, 1); // -> 6
breakingBoundaries(3, 4, 3, 0, 0); // -> 11
breakingBoundaries(4, 4, 5, 2, 1); // -> 160
breakingBoundaries(5, 6, 9, 2, 5); // -> 11635
breakingBoundaries(6, 6, 12, 3, 4); // -> 871065
breakingBoundaries(6, 6, 15, 3, 4); // -> 40787896
breakingBoundaries(6, 8, 16, 2, 1); // -> 137495089

solution 

solution
dynamic programming with memoization
const breakingBoundaries = (m, n, k, r, c, memo={}) => {
  const key = `${k},${r},${c}`;
  if (key in memo) return memo[key];
  
  const rowInbounds = 0 <= r && r < m;
  const colInbounds = 0 <= c && c < n;
  if (!rowInbounds || !colInbounds) return 1;
  
  if (k === 0) return 0;
  
  let count = 0;
  const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let delta of deltas) {
    const [ dRow, dCol ] = delta;
    count += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol, memo);
  }
  
  memo[key] = count;
  return count;
};
m = # rows
n = # columns
k = # moves
Time: O(mnk)
Space: O(mnk)