tolerant teams
Write a function, tolerantTeams, that takes in an array of rivalries as an argument. A rivalry is a pair of people who should not be placed on the same team. The function should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team. The two teams formed do not have to be the same size.

tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader']
]); // -> true
tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader'],
  ['raj', 'philip'],
  ['seb', 'raj']
]); // -> false
tolerantTeams([
  ['cindy', 'anj'],
  ['alex', 'matt'],
  ['alex', 'cindy'],
  ['anj', 'matt'],
  ['brando', 'matt']
]); // -> true
tolerantTeams([
  ['alex', 'anj'],
  ['alex', 'matt'],
  ['alex', 'cindy'],
  ['anj', 'matt'],
  ['brando', 'matt']
]); // -> false
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
tolerantTeams([
  ['alan', 'jj'],
  ['jj', 'richard'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['betty', 'christine'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> false

solution -

solution
depth first coloring
const tolerantTeams = (rivalries) => {
  const graph = buildGraph(rivalries);
  
  const coloring = {};
  for (let node in graph) {
    if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
      return false;
    }
  }
  
  return true;
};

const isBipartite = (graph, node, coloring, currentColor) => {
  if (node in coloring) return coloring[node] === currentColor;
  
  coloring[node] = currentColor;
  
  for (let neighbor of graph[node]) {
    if (!isBipartite(graph, neighbor, coloring, !currentColor)) {
      return false;
    }
  }
  
  return true;
};

const buildGraph = (rivalries) => {
  const graph = {};
  for (let pair of rivalries) {
    const [a, b] = pair;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  };
  
  return graph;
};
e = number of rivalries
n = number of people
Time: O(e)
Space: O(n)