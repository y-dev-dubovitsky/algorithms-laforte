export class InsertSort {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  add(el) {
    this.arr[this.size] = el;
    this.size++
  }

  sort() {
    let i = null;
    let j = null;

    for(i = 1; i < this.size; i++) {
      let tmp = this.arr[i];
      j = i;
      while(j > 0 && this.arr[j - 1] >= tmp) {
        this.arr[j] = this.arr[j - 1];
        --j;
      }
      this.arr[j] = tmp
    }
  }

  show() {
    console.log(this.arr)
  }
}