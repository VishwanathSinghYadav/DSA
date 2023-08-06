build tree in post
Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

You can assume that the values of inorder and postorder are unique.

buildTreeInPost(
  [ 'y', 'x', 'z' ],
  [ 'y', 'z', 'x' ] 
);
//       x
//    /    \
//   y      z
buildTreeInPost(
  [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
  [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
);
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g
buildTreeInPost(
  [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
);
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
buildTreeInPost(
  ['m', 'n'],
  ['m', 'n']
);
//       n
//     /
//    m
buildTreeInPost(
  ['n', 'm'],
  ['m', 'n']
);
//     n
//      \
//       m

solution 

solution
recursive
const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0) return null;
  const value = postOrder[postOrder.length - 1];
  const root = new Node(value);
  const mid = inOrder.indexOf(value);
  const leftIn = inOrder.slice(0, mid);
  const rightIn = inOrder.slice(mid + 1);
  const leftPost = postOrder.slice(0, leftIn.length);
  const rightPost = postOrder.slice(leftIn.length, -1);
  root.left = buildTreeInPost(leftIn, leftPost);
  root.right = buildTreeInPost(rightIn, rightPost);
  return root;
};
n = length of array
Time: O(n^2)
Space: O(n^2)