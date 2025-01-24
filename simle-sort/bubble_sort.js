export class BubbleSort {
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

    for(i = this.size - 1; i > 1; i--) {
      for(j = 0; j < i; j++) {
        if(this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j +1];

          this.arr[j + 1] = this.arr[j] 
          this.arr[j] = temp;
        }
      }
    }
  }

  show() {
    console.log(this.arr)
  }
}