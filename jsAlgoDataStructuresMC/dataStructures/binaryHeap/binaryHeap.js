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
}

let newBinaryHeap = new MaxBinaryHeap();
console.log(newBinaryHeap.insert2(44));
console.log(newBinaryHeap.insert2(15));
console.log(newBinaryHeap.insert2(70));
console.log(newBinaryHeap.insert2(99));
console.log(newBinaryHeap.insert2(45));
console.log(newBinaryHeap.insert2(100));
console.log(newBinaryHeap.insert2(65));
console.log(newBinaryHeap.insert2(40));
console.log(newBinaryHeap.insert2(53));
