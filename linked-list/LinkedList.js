class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
};

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
      const node = new Node(data, this.head);
      this.head = node;

      return this;
  }

  appendOnTail(data) {
    const tail = this.tail();
    tail.next = new Node(data);
    
    return this;
  }

  isEmpty() {
    return this.head === null;
  }

  find(data, equals) {
    let curr = this.head;
    
    if (curr)  {
      const compare = this._compare(equals, data);
      
      while (curr && !compare(curr.data)) {
        curr = curr.next;    
      }

      if (curr) return curr;
    }

    return null;
  }

  delete(data, equals) {
    let left;
    let curr = this.head;
    
    if (curr) {
      const compare = this._compare(equals, data);
    
      while (curr && !compare(curr.data)) {
        left = curr;
        curr = curr.next;    
      }

      if (curr) {
        left.next = curr.next;
        return curr
      }
    }

    return null;
  }

  pop() {
    let penultimate = this.head;
    let last = this.head.next;

    while (last && last.next) {
      penultimate = last;
      last = last.next;
    }

    if (!last) {
      penultimate = null;
    } else {
      penultimate.next = null;
    }

    return this;
  }

  shift() {
    if (this.head) { 
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    }

    return this;
  }

  tail() {
    if (this.head && this.head.next) {
      let curr = this.head.next;
      
      while (curr.next) {
        curr = curr.next;
      }

      return curr;
    }

    return this.head;
  }

  toSring() {
    let result = ` ${this.head ? this.head.data : null} `;
    let curr = this.head ? this.head.next : null;

    while(curr) {
      result += ` -> ${curr.data}`
      curr = curr.next; 
    }

    return `[${result}]`;
  }

  _compare(equals, data) {
    if (equals) {
      return (paramData) => equals(data, paramData);
    }

    return (paramData) => data === paramData;
  }
};