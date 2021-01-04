//* Array Implementation

//? Using push and pop to add or remove from the end
// let stack = [];
// stack.push('Google');
// stack.push('Instagram');
// stack.push('Youtube');
// stack.pop();
// stack.pop();
// stack.pop();
// stack.push('Blah');
// stack.pop();

//? Using shift and unshift to add or removed from the beginning
// stack.unshift('Created new file');
// stack.unshift('Resized the file');
// stack.unshift('Cloned the file');
// stack.shift();
// stack.shift();
// stack.shift();

//* Linked List Implementation
//? Notice the similarities between this and the singly/doubly linked list data structures.
//! Alternatively, we could have done this with a singly linked list, the only difference is that we would have just done shift and unshift
//! And called them push and pop so we could get constant time...
//todo Because we used a doubly linked list, we are getting constant time because we can do this.last.prev instead of having to loop through the list.
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //* Push Method --> Adds a new node onto the end of our stack
    //? If the stack is empty, then the newNode is first and last and has no next or previous
    //? Else, we update this.last to reflect the changes, and also change the next/previous properties of the new last and the previous last to reflect changes.
    //? Increment the stacks size and return the stacks size
    push(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }
        return ++this.size;
    }
    //* Pop Method --> Removes the last node from the stack
    //? If its empty we return null, if the size is 1, we set the first and last properties to null
    //? Else we make a few changes to the next and previous properties of the new last and old last properties
    //? Decrement the size and return the poppedNode
    pop(){
        if(this.size === 0) return null;
        const poppedNode = this.last;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.last = poppedNode.prev;
            poppedNode.prev.next = null;
            poppedNode.prev = null; //! Gets rid of "Lingering Connections"
        }
        this.size--;
        return poppedNode;
    }
}

const newStack = new stack();
newStack.push(5);
newStack.push(6);
newStack.push(7);
newStack.push(8);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
// console.log(newStack.pop());
console.log(newStack);