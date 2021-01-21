class Node{
    constructor(val, priority){
        this.priority = priority
        this.val = val
    }
}

class PriorityQueue{
    constructor(){
        this.queue = [];
    }
    swap(index1, index2){
        [this.queue[index1], this.queue[index2]] = [this.queue[index2], this.queue[index1]]
    }
    insert(val, priority){
        this.queue.push(new Node(val, priority))
        let child = this.queue.length - 1
        while(true){
            let parent = Math.floor((child - 1)/2)
            if(!this.queue[parent] || this.queue[child].priority < this.queue[parent].priority) return this.queue
            this.swap(child, parent)
            child = parent
        }
    }
    extractMax(){
        this.swap(0, this.queue.length - 1);
        if(this.queue.length === 1) return this.queue.pop();
        let popped = this.queue.pop();
        let parent = 0;
        while(true){
            let left = 2 * parent + 1;
            let right = 2 * parent + 2;
            let leftElement = this.queue[left] ? this.queue[left].priority : -Infinity;
            let rightElement = this.queue[right] ? this.queue[right].priority : -Infinity;
            let parentElement = this.queue[parent].priority;
            if(parentElement > leftElement && parentElement > rightElement) return popped
            if(leftElement >= rightElement){
                this.swap(parent, left)
                parent = left;
            }else if(rightElement > leftElement){
                this.swap(parent, right)
                parent = right;
            }
        }
    }
}

let pq = new PriorityQueue();
pq.insert(10, 0)
pq.insert(50, 1)
pq.insert(25, 10)
pq.insert(100, 5)
// console.log(pq)
console.log(pq.extractMax())
console.log(pq)
console.log(pq.extractMax())
console.log(pq)
console.log(pq.extractMax())
console.log(pq)
console.log(pq.extractMax())
console.log(pq)