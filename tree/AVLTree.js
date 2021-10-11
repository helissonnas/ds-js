const NodeBST = require('./NodeBST');

module.exports = class AVLTree extends NodeBST {
  constructor() {
    super(...arguments);
    this.height = 0;
  }

  insert() {

  }

  delete() {

  }

  itsBalanced() {
    const leftHeight = this.left ? this.left.height() : 0;
    const rightHeight = this.right ? this.right.height() : 0;

    return leftHeight - rightHeight;
  }

  rebalance() {

  }

  _leftRotation() {

  }

  _rightRotation() {

  }
};