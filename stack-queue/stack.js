export class StackX {
  constructor(maxSize) {
    this.top = -1;
    this.maxSize = maxSize;
    this.arr = new Array(maxSize);
  }

  push(el) {
    if(this.top >= this.maxSize - 1) {
      throw new Error("Stack overflow")
    }
    this.arr[++this.top] = el;
  }

  pop() {
    return this.arr[this.top--];
  }

  peek() {
    return this.arr[this.top]
  }

  isEmpty() {
    return this.top >= 0 ? false : true;
  }

  isFull() {
    return (this.top + 1) === this.maxSize
  }

}