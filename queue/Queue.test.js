const Queue = require('./Queue');
const test_output = require('../utils/test_output');

const q = new Queue(['A','B','C']);
test_output(`return A as head: ${q.items}`, 'A', q.head);

const removed = q.dequeue();
test_output(`return A after dequeue: ${q.items}`, 'A', removed);

q.enqueue('D');
test_output(`enqueue D: ${q.items}`, 'D', q.items[q.items.length - 1]);

q.dequeue()
q.dequeue()
q.dequeue()
test_output(`return empty: ${q.items}`, true, q.isEmpty());
