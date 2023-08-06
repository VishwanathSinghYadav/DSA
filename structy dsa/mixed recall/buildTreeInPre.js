build tree in pre
Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The function should build a binary tree that has the given in-order and pre-order traversal structure. The function should return the root of this tree.

You can assume that the values of inorder and preorder are unique.

buildTreeInPre(
  [ 'z', 'y', 'x' ],
  [ 'y', 'z', 'x' ] 
);
//       y
//    /    \
//   z      x
buildTreeInPre(
  [ 'y', 'z', 'x' ],
  [ 'y', 'x', 'z' ] 
);
//       y
//        \
//         x
//        / 
//       z
buildTreeInPre(
  [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ] 
);
//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
buildTreeInPre(
  [ 't', 'u', 's', 'q', 'r', 'p' ],
  [ 'u', 't', 's', 'r', 'q', 'p' ] 
);
//     u
//  /    \
// t      s
//         \
//         r
//        / \
//        q  p
buildTreeInPre(
  [ 'm', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't' ],
  [ 'l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't' ] 
);
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t

solution 

solution
recursive with array copies
const buildTreeInPre = (inOrder, preOrder) => {
  if (inOrder.length === 0) return null;
  const value = preOrder[0];
  const root = new Node(value);
  const mid = inOrder.indexOf(value);
  const leftInOrder = inOrder.slice(0, mid);
  const rightInOrder = inOrder.slice(mid + 1);
  const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
  const rightPreOrder = preOrder.slice(leftInOrder.length + 1);
  root.left = buildTreeInPre(leftInOrder, leftPreOrder);
  root.right = buildTreeInPre(rightInOrder, rightPreOrder);
  return root;
};
n = length of array
Time: O(n^2)
Space: O(n^2)
recursive in-place
const buildTreeInPre = (
  inOrder, 
  preOrder, 
  inOrderStart = 0, 
  inOrderEnd = inOrder.length - 1, 
  preOrderStart = 0, 
  preOrderEnd = preOrder.length - 1) => {
    if (inOrderEnd < inOrderStart) return null;
    const value = preOrder[preOrderStart];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftSize = mid - inOrderStart;
    root.left = buildTreeInPre(
      inOrder, 
      preOrder, 
      inOrderStart, 
      mid - 1, 
      preOrderStart + 1, 
      preOrderStart + leftSize
    );
    root.right = buildTreeInPre(
      inOrder, 
      preOrder, 
      mid + 1, 
      inOrderEnd, 
      preOrderStart + leftSize + 1, 
      preOrderEnd
    );
    return root;
};
n = length of array
Time: O(n)
Space: O(n)