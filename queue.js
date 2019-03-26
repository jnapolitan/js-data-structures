class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    const item = this.queue.shift();
    return item;
  }

  peek() {
    return this.queue[0];
  }

  length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}