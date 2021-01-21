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
    //* Recursively
    insert2(val, index = 0, child = -1){
        if(index === 0) this.values.push(val)
        if(child === -1) child = this.values.length - 1
        let parent = Math.floor((child - 1)/2)
        if(this.values[child] > this.values[parent]){
            [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]];
            return this.insert2(val, index + 1, parent)
        }
        return this.values
    }
    extractMax(){
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        if(this.values.length === 1) return this.values.pop()
        let popped = this.values.pop();
        let parent = 0;
        while(true){
            let left = 2 * parent + 1;
            let right = 2 * parent + 2
            let leftElement = this.values[left] || 0;
            let rightElement = this.values[right] || 0;
            if(this.values[parent] > leftElement && this.values[parent] > rightElement) return popped
            if(this.values[left] > rightElement){
                [this.values[parent], this.values[left]] = [this.values[left], this.values[parent]]
                parent = left;
            }else if(this.values[right] > leftElement){
                [this.values[parent], this.values[right]] = [this.values[right], this.values[parent]]
                parent = right;
            }
        }
    }
}

let newBinaryHeap = new MaxBinaryHeap();
newBinaryHeap.insert2(44);
newBinaryHeap.insert2(15);
newBinaryHeap.insert2(70);
newBinaryHeap.insert2(99);
newBinaryHeap.insert2(45);
newBinaryHeap.insert2(100);
newBinaryHeap.insert2(65);
newBinaryHeap.insert2(40);
newBinaryHeap.insert2(53);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()
console.log(newBinaryHeap.values);
newBinaryHeap.extractMax()

// console.log(newBinaryHeap.extractMax())
// console.log(newBinaryHeap.extractMax())
// console.log(newBinaryHeap.extractMax())

console.log(newBinaryHeap.values);
