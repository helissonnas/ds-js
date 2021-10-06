const green = '\x1b[32m';
const red = '\x1b[31m';

function test_output(must, expected, given, assert = _assert) {
  if (assert(expected, given)) {
    _success(must, expected, given);
  } else {
    _failed(must, expected, given, assert);
  }

  console.log('\n');
}

function _success(must) {
  console.log(green, `Did ${must}`, '✅');
}

function _failed(must, expected, given) {
  console.log(red, `Must ${must}`, '❌');

  console.log(`Expected: ${expected}`);
  console.log(red, `Returned: ${given}`);
} 

function _assert(expected, given) {
  return expected === given;
}

module.exports = test_output;