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
    //* Push Method PseudoCode:
    //? Create a new node using the value passed in
    //? if the list is empty, set the head and the tail to point
    //? otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
    //? update length
    //? return the list
    push(val){
        const node = new Node(val);
        !this.head ? this.head = node : this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return this;
    }
    //* Pop Method PseudoCode:
    //? Find the node before the tail, set that equal to the new tail.
    //? Set the new tails.next=null;
    //? Decrement the length by 1;
    //? If we pop the last element, set head and tail = null
    pop(){
        if(!this.head) return undefined;
        let oldTail = this.tail;
        let current = this.head;
        let previous = this.head;
        //finds the next to last node..saves it into the previous variable
        while(current.next){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return oldTail;
    }
    //* Shift Method PseudoCode
    //? Takes current head.next and sets that one to be the new head
    //? Returns the oldHead;
    shift(){
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        return oldHead.val;
    }

    //* Unshift Method PseudoCode:
    //? Sets new node to be the head
    //? New node.next = oldHead
    unshift(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const list = new SinglyLinkedList();
list.push('Hey')
list.push('Hi')
list.push('Hello')
console.log(list.shift());
console.log(list);


