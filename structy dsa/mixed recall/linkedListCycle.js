linked list cycle
Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

//         _______
//       /        \
// a -> b -> c -> d 

linkedListCycle(a);  // true
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = q; // cycle

//    ________________
//  /                 \
// q -> r -> s -> t -> u 

linkedListCycle(q);  // true
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d 

linkedListCycle(a);  // false
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = t; // cycle

//                   __
//                 /   \
// q -> r -> s -> t -> u 

linkedListCycle(q);  // true
const p = new Node('p');

// p

linkedListCycle(p); // false
linkedListCycle(null); // false

solution -

solution
using a set
const linkedListCycle = (head) => {
  const nodes = new Set();
  
  let current = head;
  while (current !== null) {
    if (nodes.has(current)) return true;
    nodes.add(current);
    current = current.next;
  }
  
  return false;
};
n = number of nodes
Time: O(n)
Space: O(n)
using two pointers
const linkedListCycle = (head) => {
  let slow = head;
  let fast = head;
  let firstIteration = true;
  while (fast !== null && fast.next !== null) {
    if (slow === fast && !firstIteration) return true;
   
    slow = slow.next;
    fast = fast.next.next;
    firstIteration = false;
  }
  
  return false;
};
n = number of nodes
Time: O(n)
Space: O(1)