class Stack {
  constructor() {
    this.count = 0;
    this.store = [];
  }

  push(item) {
    this.store.push(item);
    this.count++;
    return item;
  }

  pop() {
    if (this.store.length === 0) {
      return undefined;
    }

    const item = this.store.pop();
    this.count--;
    return item;
  }

  peek() {
    return this.store[this.count - 1];
  }

  length() {
    return this.count;
  }
}