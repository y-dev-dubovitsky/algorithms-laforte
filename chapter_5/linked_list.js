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

  display() {
    let current = this.first;
    while(current != null) {
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
