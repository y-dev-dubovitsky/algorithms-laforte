import { LowArray } from "./array.js"
import { SortArray } from "./sort_array.js"
import { BubbleSort } from "./bubble_sort.js"
import { SelectionSort } from "./selection_sort.js"

// const arr = new LowArray([1,2,3])
// arr.show()
// arr.add(7)
// arr.show()
// arr.remove(1)
// arr.show()

const sortArray = new SortArray()
sortArray.add(0)
sortArray.add(3)
sortArray.add(1)
sortArray.add(2)
sortArray.add(3)
sortArray.add(3)
sortArray.add(3)
sortArray.show()
console.log(sortArray.search(5));
sortArray.delete(1)
sortArray.delete(3)
sortArray.delete(3)
sortArray.show()

// Bubble sort
console.log("Bubble sort")
const buble = new BubbleSort();
buble.add(1)
buble.add(-2)
buble.add(-2)
buble.add(-2)
buble.add(0)
buble.add(5)
buble.add(99)

buble.show()
buble.sort()
buble.show()

// Selection sort
const selection = new SelectionSort();
selection.add(0);
selection.add(123124);
selection.add(99);
selection.add(1);
selection.add(-52);
selection.add(-4);
selection.show();
selection.sort()
selection.show();