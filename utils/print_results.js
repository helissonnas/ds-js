/**
 * Execute test cases and print
 * @param {String} question 
 * @param {Array} testCases 
 * @param {Function} fun 
 */
function print_results(question, testCases, fun) {
  console.log(question);
  testCases.forEach(arr => console.log(`Input: ${arr.toString()} --- Output: ${fun(arr).toString()}`));
}

module.exports = print_results;
