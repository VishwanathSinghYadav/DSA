is binary search tree
Write a function, isBinarySearchTree, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.

A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than the node's value.

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> true
const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(15);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   15     19

isBinarySearchTree(a); // -> false
const a = new Node(12);
const b = new Node(5);
const c = new Node(19);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     19
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> true
const a = new Node(12);
const b = new Node(5);
const c = new Node(10);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     10
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> false
const q = new Node(54);
const r = new Node(42);
const s = new Node(70);
const t = new Node(31);
const u = new Node(50);
const v = new Node(72);
const w = new Node(47);
const x = new Node(90);

q.left = r;
q.right = s;
r.left = t;
r.right = u;
s.right = v;
u.left = w;
v.right = x;

//       54
//     /    \
//    42     70
//   / \      \
// 31   50     72
//     /        \
//    47         90

isBinarySearchTree(q); // -> true

solution 

solution
in order traversal
const isBinarySearchTree = (root, target) => {
  const values = [];
  inOrderTraversal(root, values);
  return isSorted(values);
};

const inOrderTraversal = (root, values) => {
  if (root === null) return;
  inOrderTraversal(root.left, values);
  values.push(root.val);
  inOrderTraversal(root.right, values);
};

const isSorted = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    const current = numbers[i];
    const next = numbers[i + 1];
    if (next < current) return false;
  }
  
  return true;
};
n = number of nodes
Time: O(n)
Space: O(n)