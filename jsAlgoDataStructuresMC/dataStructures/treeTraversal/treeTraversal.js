let queue = require('../stacks_queues/queues');

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.freq = 1;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val, current = this.root){
        if(!current){ 
            this.root = new Node(val);
            return this;
        };
        if(val === current.val){
            current.freq++;
            return this;
        }else if(val < current.val){
            if(current.left) return this.insert(val, current.left)
            else{
                current.left = new Node(val);
            }
        }else if(val > current.val){
            if(current.right) return this.insert(val, current.right)
            else{
                current.right = new Node(val);
            }
        }
    }
    find(val, current = this.root){
        if(!current) return undefined;
        if(val < current.val) return current.left ? this.find(val, current.left) : undefined;
        else if(val > current.val) return current.right ? this.find(val, current.right) : undefined;
        else return current;
    }
    BFS(){
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(20);
console.log(tree.BFS());