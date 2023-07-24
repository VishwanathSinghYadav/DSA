island count
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

islandCount(grid); // -> 1
 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0

solution - 

solutions
depth first
const islandCount = (grid) => {
  const visited = new Set();
  
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  
  if (grid[r][c] === 'W') return false;
  
  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
};
r = number of rows
c = number of columns
Time: O(rc)
Space: O(rc)


// stack itterative
const islandCount = (grid) => {
  
  const visited = new Set();
  let count = 0;
  
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col< grid[0].length; col++){
        if(grid[row][col] === 'L' && !(visited.has(row + ',' + col))){
          explore(grid, row, col, visited)
          count += 1
        }
    }
  }
  
  return count
  
};

const explore = (grid, row, col, visited) =>{
  
  const stack = [[row, col]];
  
  while(stack.length > 0){
    
    const [currRow, currCol] = stack.pop();
  
    if(!(visited.has(currRow + ',' + currCol))){
      visited.add(currRow + ',' + currCol)
        if( 0<= currCol-1 && currCol-1 < grid[currRow].length && grid[currRow][currCol-1] === 'L'){
         stack.push([currRow, currCol-1]);
        };
        if(0<= currCol+1 && currCol+1 < grid[currRow].length && grid[currRow][currCol+1] === 'L'){
           stack.push([currRow, currCol+1]);
        };
        if(0<= currRow-1 && currRow-1 < grid.length && grid[currRow-1][currCol] === 'L'){
           stack.push([currRow-1, currCol]);
        };
        if(0<= currRow+1 && currRow+1 < grid.length && grid[currRow+1][currCol] === 'L'){
           stack.push([currRow+1, currCol]);
        };
       
       }
    
  }
  
  return;
  
}