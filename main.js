import { LinkedList } from "./linked_list.js"

const list = new LinkedList();

list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.append("5");
list.append("6");
list.prepend("0");
list.pop();

console.log(list.toString);
console.log(`size: ${list.size}`);
console.log(`head: ${list.head}`);
console.log(`tail: ${list.tail}`);
console.log(`at(index): ${list.at(2).value}`);
console.log(`contains(value): ${list.contains("4")}`);
console.log(`contains(value): ${list.contains("7")}`);
console.log(`find(value): ${list.find("4")}`);
console.log(`find(value): ${list.find("7")}`);