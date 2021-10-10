module.exports = class NodeBST {
  /**
   * Binary Tree NodeBST
   */
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new NodeBST(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new NodeBST(value);
      }
    }
  }

  find(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      return this.left ? this.left.find(value) : false;
    } else {
      return this.right ? this.right.find(value) : false;
    }
  }

  toString(traversal = 'inOrder') {
    return this[traversal]();
  }

  /**
   * O
   * ↓
   */
  inOrder() {
    let result = '';

    if (this.left) {
      result += this.left.inOrder();
    }

    result += ` ${this.value} ->`;

    if (this.right) {
      result += this.right.inOrder();
    }

    return result;
  }
  
  /**
   * ←O
   */
  preOrder() {
    let result = ` ${this.value} ->`;

    if (this.left) {
      result += this.left.preOrder();
    }

    if (this.right) {
      result += this.right.preOrder();
    }

    return result;
  }

  /**
   * O→
   */
  postOrder() {
    let result = '';

    if (this.left) {
      result += this.left.postOrder();
    }

    if (this.right) {
      result += this.right.postOrder();
    }

    return result + ` ${this.value} ->`;
  }

  height() {
    if (this.itsLeaf()) {
      return 0;
    } else {
      
      const leftHeight = this.left ? this.left.height() : 0;
      const rightHeight = this.right ? this.right.height() : 0;
      
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  itsLeaf() {
    return !this.left && !this.right;
  }
}