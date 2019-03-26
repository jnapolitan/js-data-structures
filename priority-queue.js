class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    if (this.isEmpty()) {
      this.queue.push(item);
    } else {
      let added = false;

      for (let i = 0; i < this.queue.length; i++) {
        if (item[1] < this.queue[i][1]) {
          this.queue.splice(i, 0, item);
          added = true;
          break;
        }
      }

      if (!added) {
        this.queue.push(item);
      }
    }
  }

  dequeue() {
    const item = this.queue.shift();
    return item;
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

const q = new PriorityQueue();
console.log(q.isEmpty());
q.enqueue(['Julian rules', 1]);
q.enqueue(['Julian sucks', 3]);
q.enqueue(['Julian totally rules', 1]);
console.log(q.queue);