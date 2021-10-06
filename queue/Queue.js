module.exports = class Queue {
  constructor(items = [], head = null) {
    this.items = items;
    this.head = head;
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