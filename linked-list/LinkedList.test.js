const LinkedList = require('./LinkedList');
const test_output = require('../utils/test_output');

let linkL = new LinkedList();

test_output(`start empty: ${linkL.toSring()}`, true, linkL.isEmpty());

linkL.append('A');
test_output(`return A as head: ${linkL.toSring()}`, 'A', linkL.head.data);

linkL.append('B');
test_output(`return B as head: ${linkL.toSring()}`, 'B', linkL.head.data);
test_output(`return A as tail: ${linkL.toSring()}`, 'A', linkL.tail().data);

linkL.appendOnTail('C');
test_output(`return C as tail: ${linkL.toSring()}`, 'C', linkL.tail().data);

test_output(`find C: ${linkL.toSring()}`, linkL.tail(), linkL.find('C'), (exp, given) => (exp.data === given.data));

test_output(`return A after delete it: ${linkL.toSring()}`, linkL.find('A'), linkL.delete('A'), (exp, given) => (exp.data === given.data));
test_output(`not find A after delete it: ${linkL.toSring()}`, null, linkL.find('A'));

linkL.appendOnTail('T');
linkL.pop();
test_output(`remove the tail: ${linkL.toSring()}`, 'C', linkL.tail().data);

linkL.append('H');
linkL.shift();
test_output(`remove the head: ${linkL.toSring()}`, 'B', linkL.head.data);
