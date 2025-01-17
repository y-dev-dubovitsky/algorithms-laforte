export class SortArray {
  constructor() {
    this.sortArray = [];
    this.size = 0;
  }

  search(el) {
    let lowBorder = 0;
    let upBorder = this.size;

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
    let j;
    for (j = 0; j < this.size; j++) {
      if (this.sortArray[j] > el) {
        break;
      }
    }
    for (let k = j; k < this.size; k++) {
      this.sortArray[k + 1] = this.sortArray[k];
    }
    this.sortArray[j] = el;
    this.size++;
  }

  delete(el) {
    let j;
    for(j = 0; j < this.size; j++) {
      if(this.sortArray[j] === el) {
        break;
      }
    }
    for(let i = j; i < this.size; i++) {
      this.sortArray[i] = this.sortArray[i + 1]
    }
    this.size--
  }

  show() {
    console.log(this.sortArray);
  }
}
