// Queues
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.unshift(item);
  }

  dequeue() {
    this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}