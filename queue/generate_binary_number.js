const print_results = require('../utils/print_results');
const Queue = require('./Queue');

function findBin(n) {
  const result = [];
  const queue = new Queue();
  queue.enqueue('1');

  for (let i = 0; i < n; i++) {
    result.push(queue.dequeue());

    const bin1 = result[i] + '0';
    const bin2 = result[i] + '1';

    queue.enqueue(bin1);
    queue.enqueue(bin2);
  }
  
  return result;
}

print_results(
  `
  Implement a function findBin(n), which will generate binary 
  numbers from 1 to n in the form of a string using a queue.
  `,
  [1, 2, 3, 12],
  findBin
)
