class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //* Push Method PseudoCode:
    //? Add a new node to the end 
    //? If there aren't any nodes in the list, then new node is both the head and the tail
    //? Else, oldTail.next = new node and new node.previous is the oldTail.
    //? Then make the new node is the tail
    //? Increment the length, and then return the entire list.
    push(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node
        }else{
            node.previous = this.tail;
            this.tail.next = node;
        } 
        this.tail = node;
        this.length += 1;
        return this;
    }
    //* Pop Method PseudoCode:
    //? If there isn't anything in the list, return undefined or false or null
    //? Grabs the current tail from the list and pops it (or removes) from the list and returns the node from the method
    //? Subtracts one from the length
    //? OldTail.previous = the new tail...I.E. we make the value at old tail - 1 the new tail
    pop(){
        if(this.length === 0) return undefined;
        const oldTail = this.tail;
        this.tail = oldTail.previous;
        this.tail.next = null;
        this.length--;
        return oldTail;
    }
    //* Shift Method PseudoCode:
    //? Removes a node from the beginning of the list
    //? Takes the head.next and makes that the new head
    //? New head.prev is now null
    //? Subtracts one from the length
    //? Returns the oldHead;
    shift(){
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.head.previous = null;
        this.length--;
        return oldHead;
    }
    //* Unshift Method PseudoCode:
    //? Adds a new node to the beginning of the list
    //? newNode = this.head
    //? newNode.next = oldHead
    //? oldHead previous is now the newNode
    //? Add one to the length
    //? If no elements in the list already, just call the push method
    unshift(val){
        if(this.length === 0) return this.push(val);
        const newNode = new Node(val);
        const oldHead = this.head;
        newNode.next = oldHead;
        oldHead.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const list = new DoublyLinkedList();
// console.log(list);
list.push(4);
list.push(12);
list.push(24);
list.push(36);
list.unshift(100);
list.push(48);
// console.log(list);
console.log(list.head.next);