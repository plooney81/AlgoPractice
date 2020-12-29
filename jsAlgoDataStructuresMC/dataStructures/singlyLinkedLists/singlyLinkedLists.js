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
    pop(){
        if(!this.head) return undefined;
        let oldTail = this.tail;
        let current = this.head;
        let previous = null;
        //finds the next to last node..saves it into the previous variable
        while(current){
            if(current.next) previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length -= 1;
        return oldTail;
    }
}

const list = new SinglyLinkedList();
list.push('Hey')
list.push('Hi')
list.push('Hello')
console.log(list.pop());



