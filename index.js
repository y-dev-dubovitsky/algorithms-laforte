import { LowArray } from './simle-sort/array.js';
import { SortArray } from './simle-sort/sort_array.js';
import { BubbleSort } from './simle-sort/bubble_sort.js';
import { SelectionSort } from './simle-sort/selection_sort.js';
import { InsertSort } from './simle-sort/insert_sort.js';

class SimpleSort {
  showAll() {
    const arr = new LowArray([1, 2, 3]);
    arr.show();
    arr.add(7);
    arr.show();
    arr.remove(1);
    arr.show();

    const sortArray = new SortArray();
    sortArray.add(0);
    sortArray.add(3);
    sortArray.add(1);
    sortArray.add(2);
    sortArray.add(3);
    sortArray.add(3);
    sortArray.add(3);
    sortArray.show();
    console.log(sortArray.search(5));
    sortArray.delete(1);
    sortArray.delete(3);
    sortArray.delete(3);
    sortArray.show();

    // Bubble sort
    console.log('Bubble sort');
    const buble = new BubbleSort();
    buble.add(1);
    buble.add(-2);
    buble.add(-2);
    buble.add(-2);
    buble.add(0);
    buble.add(5);
    buble.add(99);

    buble.show();
    buble.sort();
    buble.show();

    // Selection sort
    const selection = new SelectionSort();
    selection.add(0);
    selection.add(123124);
    selection.add(99);
    selection.add(1);
    selection.add(-52);
    selection.add(-4);
    selection.show();
    selection.sort();
    selection.show();

    // Insert sort
    const insert = new InsertSort();
    insert.add(0);
    insert.add(123124);
    insert.add(99);
    insert.add(1);
    insert.add(-52);
    insert.add(-4);
    insert.show();
    insert.sort();
    insert.show();
  }
}

new SimpleSort().showAll()
