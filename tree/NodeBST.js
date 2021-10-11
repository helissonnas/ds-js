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
    const node = new NodeBST(value);

    this._insertNode(node);
  }

  _insertNode(node) {
    if (node.value <= this.value) {
      if (this.left) {
        this.left._insertNode(node);
      } else {
        this.left = node;
      }
    } else {
      if (this.right) {
        this.right._insertNode(node);
      } else {
        this.right = node;
      }
    }
  }

  delete(value, parent) {
    if (!value) {
      return null
    } else if (value === this.value) {
      return this._replace(parent);
    } else if (value < this.value) {
      return this.left ? this.left.delete(value, this) : null;
    } else {
      return this.right ? this.right.delete(value, this) : null;
    }
  }

  _replace(parent) {
    const left = this.left;

    if (this.itsLeaf()) {
      if (this.value <= parent.value) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (this.right) {
      this.value = this.right.value;
      this.left = this.right.left;
      this.right = this.right.right;
      
      this._insertNode(left);
    } else {
      this.value = this.left.value;
      this.left = this.left.left;
      this.right = this.left.right;
    }

    return this;
  }

  min() {

  }

  max() {

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