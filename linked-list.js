class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  add(val) {
    const node = new ListNode(val);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
  }

  remove(val) {
    let currentNode = this.head;
    let previousNode;

    if (currentNode.val === val) {
      this.head = currentNode.next;
    } else {
      while (currentNode.val !== val) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode.val;
  }

  isEmtpy() {
    return this.length === 0;
  }

  indexOf(val) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.val === val) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  valAt(index) {
    if (this.length < index) return undefined;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    return currentNode.val;
  }

  addAt(index, val) {
    if (this.length < index) return undefined;

    const node = new ListNode(val);
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = node;
      node.next = currentNode;
    }
    this.length++;
  }

  removeAt(index) {
    if (this.length < index) return undefined;

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode;

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
      return currentNode.val;
    }

    this.length--;
  }
}