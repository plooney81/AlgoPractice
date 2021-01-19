class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val)
        let child = this.values.length - 1;
        let parent = Math.floor((child - 1)/2);
        while(this.values[child] > this.values[parent]){
            [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]];
            child = parent;
            parent = Math.floor((child - 1)/2);
        }
        return this.values;
    }
}

let newBinaryHeap = new MaxBinaryHeap();
console.log(newBinaryHeap.insert(44));
console.log(newBinaryHeap.insert(15));
console.log(newBinaryHeap.insert(70));
console.log(newBinaryHeap.insert(99));
console.log(newBinaryHeap.insert(45));
console.log(newBinaryHeap.insert(100));
console.log(newBinaryHeap.insert(65));
console.log(newBinaryHeap.insert(40));
console.log(newBinaryHeap.insert(53));
