//* Compare two linked lists
//? Write a function that compares two linked lists, given the heads of both of the lists
//? Compare the data in the nodes of the linked lists to check if they are equal.
//? If all data attributes are equal and the lists are the same length, return 1
//? Otherwise return 0;

//todo Starter Code:
const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

const CompareLists = (llist1, llist2) => {
    let current1 = llist1;
    let current2 = llist2;
    while(current1 || current2){
        if(!current1 || !current2 || current1.data !== current2.data){
            return 0
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return 1;
}

// let linkedListOne = new SinglyLinkedList();
// let linkedListTwo = new SinglyLinkedList();
// linkedListOne.insertNode(1);
// linkedListOne.insertNode(2);
// linkedListOne.insertNode(3);
// linkedListTwo.insertNode(1);
// linkedListTwo.insertNode(2);
// linkedListTwo.insertNode(3);
// console.log(CompareLists(linkedListOne.head, linkedListTwo.head));

// let three = new SinglyLinkedList();
// let four = new SinglyLinkedList();
// three.insertNode(1);
// three.insertNode(2);
// three.insertNode(3);
// four.insertNode(1);
// four.insertNode(2);
// // four.insertNode(3);
// console.log(CompareLists(three.head, four.head));

//* Merge Two Sorted Linked Lists
//? Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list.
const mergeLists = (head1, head2) => {
    let mergedList = new SinglyLinkedList();
    let current1 = head1;
    let current2 = head2;
    while(current1 || current2){
        if(!current1) {
            mergedList.insertNode(current2.data)
            current2 = current2.next;
        }else if(!current2) {
            mergedList.insertNode(current1.data)
            current1 = current1.next;
        }else if(current1.data < current2.data){
            mergedList.insertNode(current1.data);
            current1 = current1.next;
        }else{
            mergedList.insertNode(current2.data);
            current2 = current2.next;
        }
    }
    return mergedList.head;
}
//* Get Node Value
//? Given a pointer to the head of a linked list and a specific position, determine the data value at that position.
//? Count backwards from the tail node. The tail is at position 0, its parent is at 1 and so on.
const getNode = (head, positionFromTail) => {
    //first we reverse the list
    let current = head;
    let previous = null;
    while(current){
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    //then we loop through our reversed list and return the right value
    let newCurrent = previous;
    let count = 0;
    while(count < positionFromTail){
        newCurrent = newCurrent.next;
        count++;
    }
    return newCurrent.data;
}