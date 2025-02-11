export default class LinkedList {
  constructor() {
    this.first = null;
  }

  addFirst(value) {
    let newLink = { value };
    newLink.next = this.first;
    this.first = newLink;
  }

  deleteFirst() {
    let tmp = this.first;
    this.first = this.first.next;
    return tmp;
  }

  find(value) {
    let current = this.first;
    while (current != null) {
      if (current.value == value) {
        return value;
      } else {
        current = current.next;
      }
    }
  }

  delete(value) {
    let current = this.first;
    let previous = this.first;
    while (current.value != value) {
      if (current.next == null) {
        return null;
      } else {
        previous = current;
        current = current.next;
      }
    }
    if (current == this.first) {
      this.first = this.first.next;
    } else {
      previous.next = current.next;
    }
    return current;
  }

  display() {
    let current = this.first;
    while (current != null) {
      console.log(current);
      current = current.next;
    }
  }
}

class Link {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNext(link) {
    this.next = link;
  }

  displayLink() {
    console.log(this.data);
  }
}
