const print_results = require('../utils/print_results');

function removeEven(arr) {
  return arr.filter(num => (num % 2) !== 0);
}

print_results(
  `Implement a function removeEven(arr), which takes an array arr in its 
  input and removes all the even elements from a given array.`, 
  [
    [],
    [0, 2, 4],
    [0, 1, 4, 1, 12, 23],
    [2, 4, 6, 12, 14, 11],
    [2, 4, 6, -1, 12, 14, 3, 0, 6, 5, -7]
  ],
  removeEven
);
