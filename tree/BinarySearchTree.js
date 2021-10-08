const Node = require('./Node');

module.exports = class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(value) {
    if (this.root.itsLeaf()) {
      this.root.appendChild(value);
      
      return this;
    }

    if (this.root.value < value) {
      
    } else {
      
    }
  }
};