module.exports = class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;

    this.insert = this.insert.bind(this);
    this.itsLeaf = this.itsLeaf.bind(this);
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right) {
        this.right = new Node(value);
      } else {
        this.left.insert(value);
      }
    }
  }

  itsLeaf() {
    return !this.left && !this.right;
  }
}