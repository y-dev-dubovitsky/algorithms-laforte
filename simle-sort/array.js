export class LowArray {
  constructor(arr) {
    this.arr = arr
  }

  find(el) {
    for (let i = 0; i < arr.length; i++) {
      if(this.arr[i] === el) {
        return i
      }
    }
    return null;
  }
  
  remove(el) {
    let position = null;
    for (let i = 0; i < this.arr.length; i++) {
      if(this.arr[i] === el) {
        position = i
      }
    }
  
    if (typeof(position) === 'number') {
      for (let i = position; i < this.arr.length - 1; i++) {
        this.arr[i] = this.arr[i + 1];
      }
      this.arr.pop()
    }
  }
  
  add(el) {
    this.arr[this.arr.length] = el
  }

  show() {
    console.log(this.arr)
  }
}