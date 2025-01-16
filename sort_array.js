export class SortArray {
  constructor() {
    this.sortArray = [];
    this.size = 0;
  }

  search(el) {
    let lowBorder = 0;
    let upBorder = this.size;

    console.log(lowBorder)
    console.log(upBorder)

    while (true) {
      if (lowBorder > upBorder) {
        return false;
      }
      let cur = Math.round((lowBorder + upBorder) / 2);
      if (this.sortArray[cur] === el) {
        return true;
      }
      if (this.sortArray[cur] < el) {
        lowBorder = cur + 1;
      } else {
        upBorder = cur - 1;
      }
    }
  }

  add(el) {
    let low = 0;
    let up = this.size;

    if(this.size === 0) {
      this.sortArray[this.size] = el;
      this.size++
      return
    }

    while (true) {
      // console.log("low = " + low)
      // console.log("up = " + up)
      if(low === up) {
        this.size++;
        for (let i = low; i < this.size; i++) {
          this.sortArray[i + 1] = this.sortArray[i];
        }
        this.sortArray[low] = el;
        break;
      }
      if (low > up) {
        this.sortArray[this.size] = el;
        this.size++;
        break;
      }
      let cur = Math.floor((low + up) / 2);
      if (this.sortArray[cur] === el) {
        this.size++;
        for (let i = cur; i < this.size; i++) {
          this.sortArray[i + 1] = this.sortArray[i];
        }
        this.sortArray[cur] = el;
        break;
      }
      if (this.sortArray[cur] < el) {
        low = cur + 1;
      } else {
        up = cur - 1;
      }
    }
  }

  show() {
    console.log(this.sortArray)
  }
}
