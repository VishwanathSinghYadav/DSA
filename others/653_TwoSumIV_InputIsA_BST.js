653. Two Sum IV - Input is a BST
Easy
6.2K
247
Companies
Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

 

Example 1:


Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
Example 2:


Input: root = [5,3,6,2,4,null,7], k = 28
Output: false


solution - 

// bfs queue
var findTarget = function(root, k) {
    const container = new Set();
    const queue = [root]

    while(queue.length>0){
        const current = queue.shift();

        if(container.has(k - current.val)) return true;
        container.add(current.val)

        if(current.left !== null){
            queue.push(current.left)
        }

        if(current.right !== null){
            queue.push(current.right)
        }
    }

    return false;

};

n is length of Array(tree)
tc- O(n)
sc- O(n)

 //// dfs recursive
// var findTarget = function(root, k, container = new Set()) {
//     if(root === null) return false;
//     if(container.has(k - root.val)) return true;
    
//     container.add(root.val);

//     const leftTree = findTarget(root.left, k, container);
//     const rightTree = findTarget(root.right, k, container)

//     if( leftTree || rightTree ) return true;

//     return false;
// };

 n is length of Array(tree)
tc- O(n)
sc- O(n)