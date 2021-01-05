//* Maximum Element
//? You have an empty sequence, and you will be given N queries. Each query is one of these three types:
//? 1. Push the element x into the stack
//? 2. Delete the element present at the tope of the stack
//? 3. Print the maximum element in the stack

class Node{
    constructor(data){
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
        this.max = 0;
    }
    findMax(){
        this.max = 0;
        if(this.size === 0) return undefined;
        let current = this.first;
        while(current){
            this.max = Math.max(this.max, current.data);
            current = current.next;
        }
    }
    push(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
        }else{
            newNode.prev = this.last;
            this.last.next = newNode;
        }
        this.last = newNode;
        this.size++;
        this.max = Math.max(this.max, val);
    }
    pop(){
        if(this.size === 0) return undefined;
        const poppedNode = this.last;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.last = poppedNode.prev;
            this.last.next = null;
            poppedNode.prev = null;
        }
        if(this.max === poppedNode.data) this.findMax();
        this.size--;
        return poppedNode;
    }
}

function processData(input) {
    let newStack = new Stack();
    
    input.split('\n').forEach((char, index) => {
        if(index !== 0){
            if(char[0] === "1"){
                newStack.push(parseInt(char.slice(2)))
            }else if(char[0] === '2'){
                newStack.pop();
            }else if(char[0] === '3'){
                console.log(newStack.max);
            }
        }
    });
} 

let test = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`;

processData(test);