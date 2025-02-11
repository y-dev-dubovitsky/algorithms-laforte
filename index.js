import LinkedList from "./chapter_5/linked_list.js";

const linkedList = new LinkedList(0);

linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)
linkedList.addFirst(6)

linkedList.display();
console.log("DELETE")

linkedList.deleteFirst();

linkedList.display();

console.log("FIND")

console.log(linkedList.find(2));
console.log(linkedList.find(1));
console.log(linkedList.find(5));

console.log("DELETE")

linkedList.delete(1)
linkedList.delete(4)

linkedList.display();


