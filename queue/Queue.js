module.exports = class Queue {
  constructor(items = []) {
    this.items = items;
    this.head = this.items[0];
  }

  getHead() {
    return this.head;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.head = element;
    this.items.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.head = this.items[1];
      
      return this.items.shift();
    }

    return null;
  }
};