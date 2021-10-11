const AVLTree = require('./AVLTree');
const test_output = require('../utils/test_output');

const avlTree = new AVLTree(4);

avlTree.insert(5);
avlTree.insert(6);
// left rotation

let expectedTree = ' 4 -> 5 -> 6 ->';
test_output(`balance tree with left rotation`, expectedTree, bst.toString());
