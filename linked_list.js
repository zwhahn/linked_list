export class LinkedList {
    constructor () {
        this.head = null
    }

    append (value) {
        let currentNode = this.head
        if (this.head = null) {
            this.head = new Node(value, nextNode = null);
        }
        else {
            while (currentNode.next != null) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = new Node(value, nextNode = null);
        }
    }

    prepend (value) {
        newNode = new Node (value, nextNode = this.head);
        this.head = newNode;
    }

    get size() {
        let k = 0
        let currentNode = this.head;
        while (currentNode != null) {
            k += 1;
            currentNode = currentNode.nextNode
        }
        return k
    }

    get head() {
        return head    
    }

    get tail() {
        let currentNode = this.head;
        while (currentNode != null) {
            currentNode = currentNode.nextNode
        }
        return tail = currentNode;
    }

    at (index) {
        let k = 0;
        let currentNode = this.head;
        while (k < index) {
            currentNode = currentNode.nextNode
        }
        return currentNode;
    }

    pop () {
        if (this.head == null) {
            return
        }
        currentNode = this.head;
        nextNodePreview = currentNode.nextNode
        while (nextNodePreview != null) {
            currentNode = currentNode.nextNode
            nextNodePreview = currentNode.nextNode
        }
        return currentNode.nextNode = null;

    }

    contains (value) {
        let currentNode = this.head;
        for (k = 0; k <= this.size; k++) {
            if (currentNode.value == value) {
                return true
            }
            return false
        }
    }

    find (value) {
        let currentNode = this.head;
        for (k = 0; k <= this.size; k++) {
            if (currentNode.value == value) {
                return k
            }
            return null
        }
    }

    get toString() {
        let linkedListString = null;
        let currentNode = this.head;
        while (currentNode.nextNode != null) {
            if (currentNode != head) {
                linkedListString.concat("linkedListString", `-> ( ${currentNode.value} )`);
            }
        }
        return linkedListString;
    }
}


class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}