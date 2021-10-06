module.exports = class Stack {
  constructor(items = [], top = null) {
    this.items = items;
    this.top = top;
  }

  getTop() {
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.items[this.items.length - 2];
      return this.items.pop();
    }

    return null;
  }
};