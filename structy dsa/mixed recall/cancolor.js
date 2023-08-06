can color
Write a function, canColor, that takes in an object representing the adjacency list of an undirected graph. The function should return a boolean indicating whether or not it is possible to color nodes of the graph using two colors in such a way that adjacent nodes are always different colors.

For example, given this graph:

x-y-z

It is possible to color the nodes by using red for x and z, 
then use blue for y. So the answer is true.

For example, given this graph:

    q
   / \
  s - r

It is not possible to color the nodes without making two 
adjacent nodes the same color. So the answer is false.
canColor({
  x: ["y"],
  y: ["x","z"],
  z: ["y"]
}); // -> true
canColor({
  q: ["r", "s"],
  r: ["q", "s"],
  s: ["r", "q"]
}); // -> false
canColor({
  a: ["b", "c", "d"],
  b: ["a"],
  c: ["a"],
  d: ["a"],
}); // -> true
canColor({
  a: ["b", "c", "d"],
  b: ["a"],
  c: ["a", "d"],
  d: ["a", "c"],
}); // -> false
canColor({
  h: ["i", "k"],
  i: ["h", "j"],
  j: ["i", "k"],
  k: ["h", "j"],
}); // -> true
canColor({
  z: []
}); // -> true

canColor({
  h: ["i", "k"],
  i: ["h", "j"],
  j: ["i", "k"],
  k: ["h", "j"],
  q: ["r", "s"],
  r: ["q", "s"],
  s: ["r", "q"]
}); // -> false
canColor({
  "a": ["b", "d"], 
  "c": ["b", "f"], 
  "b": ["a", "c"], 
  "d": ["a", "e"], 
  "e": ["d", "f"], 
  "f": ["e", "c"]
}); // -> true

solution -

solutions
depth first recursive
const canColor = (graph) => {
  const coloring = {};
  
  for (let node in graph) {
    if (!(node in coloring)) {
      if (!valid(graph, node, coloring, false)) {
        return false;
      }
    }
  }
  
  return true;
};

const valid = (graph, node, coloring, currentColor) => {
  if (node in coloring) return currentColor === coloring[node];
  
  coloring[node] = currentColor;
  
  for (let neighbor of graph[node]) {
    if (!valid(graph, neighbor, coloring, !currentColor)) {
      return false;
    }
  }
  
  return true;
};
n = number of nodes
Time: O(n^2)
Space: O(n)