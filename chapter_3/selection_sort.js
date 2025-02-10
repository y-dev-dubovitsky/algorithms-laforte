export class SelectionSort {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  add(el) {
    this.arr[this.size] = el;
    this.size++;
  }

  sort() {
    for (let i = 0; i < this.size - 1; i++) {
      let minIdx = i;
      for(let j = i + 1; j < this.size; j++) {
        if(this.arr[j] < this.arr[minIdx]) {
          minIdx = j
        }
      }
      let tmp = this.arr[i];
      this.arr[i] = this.arr[minIdx];
      this.arr[minIdx] = tmp;
    }
  }

  show() {
    console.log(this.arr)
  }
}
