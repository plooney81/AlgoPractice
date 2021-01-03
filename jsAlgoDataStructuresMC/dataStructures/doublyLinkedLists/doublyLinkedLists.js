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
    //? 
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
}

const list = new DoublyLinkedList();
list.push(4);
list.push(12);
console.log(list);