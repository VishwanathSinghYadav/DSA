rare routing
Write a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. A route is a sequence of roads that does not visit a city more than once.

Cities will be numbered 0 to n - 1.

You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.

For example, given these roads:

0 --- 1
| \
|  \
|   \
2    3

There is a unique route for between every pair of cities.
So the answer is true.


For example, given these roads:

0 --- 1
| \
|  \
|   \
2 -- 3

There are two routes that can be used to travel from city 1 to city 2:
- first route:  1, 0, 2
- second route: 1, 0, 3, 2 
The answer is false, because routes should be unique.
rareRouting(4, [
  [0, 1],
  [0, 2],
  [0, 3]
]); // -> true
rareRouting(4, [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 2]
]); // -> false
rareRouting(6, [
  [1, 2],
  [5, 4],
  [3, 0],
  [0, 1],
  [0, 4],
]); // -> true
rareRouting(6, [
  [1, 2],
  [4, 1],
  [5, 4],
  [3, 0],
  [0, 1],
  [0, 4],
]); // -> false
rareRouting(4, [
  [0, 1],
  [3, 2],
]); // -> false

solution- 

solutions
depth first recursive
const rareRouting = (n, roads) => {
  const graph = makeGraph(n, roads);
  const visited = new Set();
  const valid = validate(graph, '0', visited, null);
  return valid && visited.size === n;
};

const validate = (graph, node, visited, lastNode) => {
  if (visited.has(node)) return false;
  
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    if (neighbor !== lastNode) {
      if (!validate(graph, neighbor, visited, node)) {
        return false;
      }
    }
  }
  
  return true;
};

const makeGraph = (n, roads) => {
  const graph = {};
  for (let city = 0; city < n; city += 1) {
    graph[city] = [];
  }
  
  for (let road of roads) {
    const [a, b] = road;
    graph[a].push(String(b));
    graph[b].push(String(a));
  }
  
  return graph;
};
n = number of nodes
Time: O(n^2)
Space: O(n)