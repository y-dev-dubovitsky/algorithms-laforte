import { LowArray } from "./array.js"
import { SortArray } from "./sort_array.js"

// const arr = new LowArray([1,2,3])
// arr.show()
// arr.add(7)
// arr.show()
// arr.remove(1)
// arr.show()

const sortArray = new SortArray()
sortArray.add(1)
sortArray.add(2)
sortArray.add(1)
sortArray.add(5)
sortArray.add(5)
sortArray.add(5)
sortArray.add(5)
sortArray.add(2)
sortArray.add(1)
sortArray.show()
console.log(sortArray.search(2));