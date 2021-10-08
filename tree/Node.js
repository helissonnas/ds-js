module.exports = class Node {
  constructor(value, leftSubTree, rightSubTree) {
    this.value = value;
    this.leftSubTree = leftSubTree;
    this.rightSubTree = rightSubTree;
  }

  itsLeaf() {
    return !this.leftSubTree && !this.rightSubTree;
  }

  appendChild(value) {
    if (value < this.value) {
      this.leftSubTree = new Node(value);
    } else {
      this.rightSubTree = new Node(value);
    }
  }
}