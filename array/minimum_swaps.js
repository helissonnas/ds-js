const print_results = require('../utils/print_results');

function minimumSwap(arr) {
  let swaps = 0;
  let i = 0;
  let aux;
  const n = arr.length;

  while (i < n) {
    if (arr[i] !== i+1) {
      const idx = arr[i] - 1;
      aux = arr[idx];
      arr[idx] = arr[i];
      arr[i] = aux;

      swaps++;
    } else {
      i++;
    }
  }

  return swaps;
}

print_results(
  `
  You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
  without any duplicates. You are allowed to swap any two elements. Find the minimum number 
  of swaps required to sort the array in ascending order.`, 
  [
    [4, 3, 1, 2],
    [2, 3, 4, 1, 5],
    [1, 3, 5, 2, 4, 6, 7],
  ],
  minimumSwap
);
