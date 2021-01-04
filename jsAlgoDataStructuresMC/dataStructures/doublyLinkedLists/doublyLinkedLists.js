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
        this.length++;
        return this;
    }
    //* Pop Method PseudoCode:
    //? If there isn't anything in the list, return undefined or false or null
    //? If the length is one, make head and tail of the list to be empty
    //? Grabs the current tail from the list and pops it (or removes) from the list and returns the node from the method
    //? Decrement the length
    //? OldTail.previous = the new tail...I.E. we make the value at old tail - 1 the new tail
    //? Update the oldTail previous property equal to null to completely sever the connection.
    //! Don't want "Lingering Connections"...so we sever them completely^
    pop(){
        if(this.length === 0) return undefined;
        const oldTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = oldTail.previous;
            this.tail.next = null;
            oldTail.previous = null;
        }
        this.length--;
        return oldTail;
    }
    //* Shift Method PseudoCode:
    //? Removes a node from the beginning of the list
    //? if the list is empty, returns undefined
    //? if the list only has one item, makes head and tail equal to null because the list is now empty
    //? Takes the head.next and makes that the new head
    //? New head.prev is now null
    //? Oldhead.next is now null (severs the connection completely so we don't get Lingering Connections)
    //? Subtracts one from the length
    //? Returns the oldHead;
    shift(){
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null; //? Severs completely
        }
        this.length--;
        return oldHead;
    }
    //* Unshift Method PseudoCode:
    //? Adds a new node to the beginning of the list
    //? newNode = this.head
    //? newNode.next = oldHead
    //? oldHead previous is now the newNode
    //? Increment length and return the list
    //? If no elements in the list already, newNode is the tail and the head
    unshift(val){
        const newNode = new Node(val);
        if(this.length === 0) {
            this.tail = newNode;
        }else{
            this.head.previous = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return this;
    }
    //* Get Method PseudoCode:
    //? Decide whether its quicker to start at the beginning and work to the end OR...
    //?     Start at the end and work towards the beginning
    //? Either way will return the node at the specified index
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let current, count;
        if(index >= (this.length - 1) / 2){
            current = this.tail;
            count = this.length - 1;
            while(count > index){
                current = current.previous;
                count--;
            }
        }else{
            current = this.head;
            count = 0;
            while(count < index){
                current = current.next;
                count++;
            }
        }
        return current;
    }
    //* Set Method PseudoCode:
    //? Takes an index and a value
    //? If index doesn't exist return false
    //? If the index exists (i.e. is between 0 and this.length - 1) then we get the node at the specified index using the get method
    //? Then update the value to be whatever is passed into the function.
    //? If we successfully updated the value return true
    set(index, val){
        const node = this.get(index);
        if(node) node.val = val;
        return !!node;
    }
    //* Insert Method PseudoCode:
    //? Takes an index and a value
    //? Create a new node called newNode
    //? If the index is < 0 or > this.length return false
    //? If index = 0 --> Use Unshift
    //? If index = this.length --> Use push
    //? Else get the node at the index and save in a var called oldNode
    //? set newNode.prev = oldNode.previous
    //? set oldNode.prev = newNode
    //? set newNode.next = oldNode
    //? Increment length and return true
    insert(index, val){
        const newNode = new Node(val);
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const oldNode = this.get(index);
        const prev = oldNode.previous;
        newNode.previous = prev;
        oldNode.previous = newNode;
        newNode.next = oldNode;
        prev.next = newNode;
        this.length++;
        return true;
    }
    //* Remove Method PseudoCode:
    //? Removes a node from a doubly linked list @ a specific position
    //? Use the get method for the specified index, if the node doesn't exist return false
    //? If the index is zero, we can simply use shift
    //? if the index is length - 1, we can simply use pop
    //? Else, we need to set the .next of the previous value = to the .next of the value to be removed
    //? We also need to set the .previous of the next value = to the .previous of the value to be removed
    //? To make sure the node doesn't have any lingering connections...we need to set the .next and the .previous value = null
    remove(index){
        const removeNode = this.get(index);
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        if(removeNode){
            const prevNode = removeNode.previous;
            const nextNode = removeNode.next;
            prevNode.next = nextNode;
            nextNode.previous = prevNode;
            removeNode.previous = null;
            removeNode.next = null;
            this.length--;
        }
        return !!removeNode;
    }
    //* Reverse Method PseudoCode:
    //? Reverses all the nodes in a doubly linked list
}

const list = new DoublyLinkedList();
// console.log(list);
list.push(4);
list.push(12);
list.push(24);
list.push(36);
console.log(list.remove(1));
console.log(list);
// console.log(list.set(-1, 500));
// console.log(list);
// list.unshift(100);
// list.push(200);
// list.unshift(50);
// console.log(list);