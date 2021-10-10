module.exports = class NodeBST {
  /**
   * Binary Tree NodeBST
   */
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;

    this.insert = this.insert.bind(this);
    this.find = this.find.bind(this);
    this.inOrder = this.inOrder.bind(this);
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

  itsLeaf() {
    return !this.left && !this.right;
  }
}