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

// processData(test);

//* Balanced Brackets
//? A bracket is considered to be any of the following characters: (,), {, }, [, or].
//? Two brackets are considered to be a matched pair if an opening bracket (i.e, (, [, or {) occurs to the left of a closing bracket of the same type
//? There are three types of matched pairs of brackets: [], {}, and ().
class Stack2{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
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
        this.size--;
        return poppedNode;
    }
}

const isBalanced = (input) => {
    let splitStr = input.split('\n');
    for(let out = 0; out < splitStr.length; out++){
        const anotherStack = new Stack2();
        let str = splitStr[out];
        let output = 'YES';
        for(let i = 0; i < str.length; i++){
            switch(str[i]){
                case '(':
                case '{':
                case '[':
                    anotherStack.push(str[i]);
                    break;
                case ')':
                    if(!anotherStack.first || anotherStack.pop().data !== '(') output = 'NO';
                    break;
                case '}':
                    if(!anotherStack.first|| anotherStack.pop().data !== '{') output = 'NO';
                    break;
                case ']':
                    if(!anotherStack.first || anotherStack.pop().data !== '[') output = 'NO';
                    break;
            }
        }
        return anotherStack.size > 0 ? 'NO' : output;
    }
}

const test2 = '[{({})}]';
const test3 = '[{({)}}]';
const test4 = `}][}}(}][))]
[](){()}
()
({}([][]))[]()
{)[](}]}]}))}(())(
([[)`
// isBalanced(test2);
// isBalanced(test3);
// isBalanced(test4);

//* Equal Stacks
//? You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height.
//? You can change the height of a stack by removing and discarding its topmost cylinder any number of times.
//? Find the maximum possible height of the stacks such that all of the stackers are exactly the same height.
//? This means you must removed zero or more cyclinders from the top of zero or more of the three stacks until they are all the same height
//? Then return the height.
class Stack3{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
        this.height = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
        }else{
            newNode.prev = this.last;
            this.last.next = newNode;
        }
        this.height += val;
        this.last = newNode;
        this.size++;
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
        this.height -= poppedNode.data;
        this.size--;
        return poppedNode;
    }
}
const equalStacks = (h1, h2, h3) => {
    let stack1 = new Stack3();
    let stack2 = new Stack3();
    let stack3 = new Stack3();
    h1.reverse().forEach(integer => stack1.push(integer));
    h2.reverse().forEach(integer => stack2.push(integer));
    h3.reverse().forEach(integer => stack3.push(integer));
    while(true){
        let min = Math.min(stack1.height, stack2.height, stack3.height);
        if(stack1.height === stack2.height && stack2.height === stack3.height) return stack1.height;
        if(stack1.height > min) stack1.pop();
        if(stack2.height > min) stack2.pop();
        if(stack3.height > min) stack3.pop();
    }
}

let arr1 = [3, 2, 1, 1, 1];
let arr2 = [4, 3, 2];
let arr3 = [1, 1, 4, 1];

console.log(equalStacks(arr1, arr2, arr3));