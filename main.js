import { LinkedList } from "./linked_list.js"

const list = new LinkedList();

list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.append("5");
list.append("6");
list.prepend("0");

console.log(list.toString);
console.log(`size: ${list.size}`);
console.log(`head: ${list.head}`);
console.log(`tail: ${list.tail}`);