const print_results = require('../utils/print_results');
const LinkedList = require('./LinkedList');
const Queue = require('../queue/Queue');

/**
 * Reverse a LinkedList
 * @param {LinkedList} ll 
 */
function reverse(ll) {
  const queue = new Queue();
  let curr = ll.head;

  while (curr) {
    queue.enqueue(curr);
    curr = curr.next;
  }

  curr = queue.dequeue()
  curr.next = null;
  ll.head = curr;

  while(!queue.isEmpty()) {
    ll.append(queue.dequeue().data);
  }

  return ll;
}


const case1 = new LinkedList();
case1.append('C');
case1.append('B');
case1.append('A');

const case2 = new LinkedList();
case2.append(5);
case2.append(4);
case2.append(3);
case2.append(2);
case2.append(1);

const case3 = new LinkedList();
case3.append('A');

const case4 = new LinkedList();
case4.append(2);
case4.append(1);

print_results(
  `
  Write the reverse function to take a singly linked list and reverse it in place.
  `,
  [case1, case2, case3, case4],
  reverse
)