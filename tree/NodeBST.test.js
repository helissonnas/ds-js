const NodeBST = require('./NodeBST');
const test_output = require('../utils/test_output');

let expectedTree = ' 3 -> 5 -> 7 ->';
const bst = new NodeBST(5);

bst.insert(3);
bst.insert(7);

test_output(`insert binary`, expectedTree, bst.toString());

bst.insert(4);
bst.insert(6);

bst.insert(2);
bst.insert(8);

test_output('found 8', true, bst.find(8));

test_output('not found 9', false, bst.find(9));

expectedTree = ' 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 ->';
test_output(`print ${expectedTree} (in order)`, expectedTree, bst.toString());


expectedTree = ' 5 -> 3 -> 2 -> 4 -> 7 -> 6 -> 8 ->';
test_output(`print ${expectedTree} (pre order)`, expectedTree, bst.toString('preOrder'));

expectedTree = ' 2 -> 4 -> 3 -> 6 -> 8 -> 7 -> 5 ->';
test_output(`print ${expectedTree} (post order)`, expectedTree, bst.toString('postOrder'));

test_output(`did show the right heigth (2)`, 2, bst.height());

bst.insert(10)
test_output(`did show the right heigth (3)`, 3, bst.height());



