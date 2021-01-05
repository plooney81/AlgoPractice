//! Starter Code
const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

//* Inserting a Node into a Sorted Doubly Linked List
//? Given a reference to the head of a doubly-linked list and an integer, data, create a new DoublyLinkedListNode object having
//? data value data and insert it at the proper location to maintain the sort.
const sortedInsert = (head, data) => {
    const newNode = new DoublyLinkedListNode(data);
    let current = head;
    while(current){
        if(data < current.data){
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev = newNode;
            if(current !== head){
                newNode.prev.next = newNode;
            }else{
                head = newNode;
            }
            break;
        }else if(!current.next){
            current.next = newNode;
            newNode.prev = current;
            break;
        }
        current = current.next;
    }

    return head;
}