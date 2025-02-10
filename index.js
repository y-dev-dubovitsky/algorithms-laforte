import LinkedList from "./chapter_5/linked_list.js";

const linkedList = new LinkedList(0);

linkedList.addFirst({value: 1})
linkedList.addFirst({value: 2})
linkedList.addFirst({value: 3})
linkedList.addFirst({value: 4})

linkedList.display();
console.log("DELETE")

linkedList.deleteFirst();

linkedList.display();