//* Array Implementation
// let arrQ = [];

// //? push/shift way
// arrQ.push('first');
// arrQ.push('second');
// arrQ.push('third');
// arrQ.shift();
// arrQ.shift();
// arrQ.shift();

// //? unshift/pop way
// arrQ.unshift('fourth')
// arrQ.unshift('fifth')
// arrQ.unshift('sixth')
// arrQ.pop();
// arrQ.pop();
// arrQ.pop();

//* Linked List Implementation
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
        }else{
            newNode.prev = this.last;
            this.last.next = newNode;    
        }
        this.last = newNode;
        this.size++;
        return this;
    }
    dequeue(){
        if(this.size === 0) return undefined;
        const shiftNode = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = shiftNode.next;
            shiftNode.next.prev = null;
            shiftNode.next = null;
        }
        this.size--;
        return shiftNode;
    }
}

const queue = new Queue();
queue.enqueue("Pete");
queue.enqueue("David");
queue.enqueue("Shannon");
queue.enqueue("Beth");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);