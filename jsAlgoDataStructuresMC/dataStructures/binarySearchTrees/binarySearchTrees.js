class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    //* Insert Method PseudoCode:
    //? create new node and check if the tree's root is null --> if it is, then we assign newNode to the root and return the tree
    //? Else, start at the root and check if the newNode's val is less than or greater than the root's val
    //? If less than then we check if root has a left--> it if doesn't then we assign newNode to the left property and return the tree
    //?     Else we move to the left and restart the checks
    //? If great than, we check if the root has a right --> if it doesn't then we assign newNode to the right property and return the tree
    //?     Else we move to the right and restart the checks
    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(current){
                if(newNode.val < current.val){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;      
                }else if(newNode.val > current.val){
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;      
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(9);
tree.insert(8);
tree.insert(11);

console.log(tree);