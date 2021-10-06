const print_results = require('../utils/print_results');
const Stack = require('./Stack');

function isBalanced(text) {
  const stack = new Stack();

  for (let pos of text.split('')) {
    if (pos === '{' || pos === '[') {
      stack.push(pos);
    } else if (pos === '}') {
      if (stack.top === '{') {
        stack.pop();
      } else {
        return false;
      }
    } else {
      if (stack.top === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.isEmpty()) return true;
}

print_results(
  `
  Implement the isBalanced() function to take a string containing only curly {},
  square [], and round () parentheses. The function should tell us if all the 
  parentheses in the string are balanced. This means that every opening parenthesis 
  will have a closing one. For example, {[]} is balanced, but {[}] is not.
  `, 
  [
    '{}',
    '[{}]',
    '{[}]',
    '[{}}]',
    ']{}]',
    '{{[{[]}]}}'
  ],
  isBalanced
);
