function print_results(question, testCases, fun) {
  console.log(question);
  testCases.forEach(arr => console.log(`Input: ${arr} --- Output: ${fun(arr)}`));
}

module.exports = print_results;
