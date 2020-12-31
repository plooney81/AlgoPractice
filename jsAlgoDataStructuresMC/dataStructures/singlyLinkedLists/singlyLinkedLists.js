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
        if(!this.head) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead.val;
    }

    //* Unshift Method PseudoCode:
    //? Sets new node to be the head
    //? New node.next = oldHead
    unshift(val){
        const newNode = new Node(val);
        if(!this.head) this.tail = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //* Get Method PseudoCode:
    //? Accepts an index
    //? If index is less than zero or greater than or equal to the length of the list, return null or undefined
    //? Loop through the list until you reach the index and return the node at that specific index.
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let count = 0;
        let current = this.head;
        while (count < index){
            current = current.next;
            count++;
        }
        return current;
    }
    //* Set Method PseudoCode:
    //? should accept a value and an index
    //? Use the get function from above to find a node at the index
    //? If the node is not found, return false.
    set(newVal, index){
        let current = this.get(index);
        current ? current.val = newVal : current = false;
        return true;
    }
    //* Insert Method PseudoCode:
    //? If index is less than zero or greater than the length --> return false
    //? If the index is zero --> just use unshift
    //? If the index is the length --> just use push
    //? Else, get the node at the index - 1;
    //? Save the .next node of that index - 1 node in a variable named current
    //? Then set the next propery of the index - 1 node equal to the our new node
    //? Save the .nxt property of our new Node to the current
    //? Increment the length and return true.
    insert(val, index){
        if(index < 0 || index > this.length) return false;
        // the !! will return true or false for the method returns...instead of returning the list like these methods are trying to do
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        let previous = this.get(index - 1);
        let current = previous.next;
        previous.next = newNode;
        newNode.next = (current) ? current : null;
        this.length++;
        return true;
    }
    //* Remove Method PseudoCode:
    //? If the index is less than zero or greater than the length --> return false
    //? If the index is zero --> just use shift
    //? if the index is the length --> just use pop
    //? Otherwise, get the node at index - 1
    //? Get the .next value for the index you are deleting
    //? Set the .next for index - 1 equal to the .next value for the node you are "deleting"
}

const list = new SinglyLinkedList();
list.push('Hey')
list.push('Hi')
list.push('Hello')
console.log(list.insert('YOOO', 0));
console.log(list.get(2));


// console.log(list.get(2));
// console.log(list.set('SUP', 3));
// console.log(list.set('YOOOOO', 2));
// console.log(list);

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);


