class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Create a new node using the value passed in
    //if the list is empty, set the head and the tail to point
    //otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.head = node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
    }
}

let list = new SinglyLinkedList();
list.push('Hey');
list.push('Hi');
console.log(list.head.next.val);

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first.val);
// console.log(first.next.val);
// console.log(first.next.next.val);
// console.log(first.next.next.next.val);
// console.log(first.next.next.next.next.val);
