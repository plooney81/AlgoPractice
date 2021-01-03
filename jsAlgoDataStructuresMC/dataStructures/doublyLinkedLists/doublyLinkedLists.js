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
    //? Else, the new node is simply the tail
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
}

const list = new DoublyLinkedList();
list.push(4);
list.push(12);
list.push(24);
list.push(36);
list.push(48);
// console.log(list);
console.log(list.tail.previous)
// console.log(list.pop());
// console.log(list);