import math

class Node:
    def __init__(self, priority, val):
        self.priority = priority
        self.val = val
    def __str__(self):
        return f'Node [priority:{self.priority}, val:{self.val}]'

class PriorityQue:
    def __init__(self):
        self.queue = []
    
    def swap(self, index_1, index_2):
        self.queue[index_1], self.queue[index_2] = self.queue[index_2], self.queue[index_1]

    def check_index(self, index):
        try:
            return self.queue[index].priority
        except IndexError:
            return 0

    def insert(self, priority, val):
        self.queue.append(Node(priority, val))
        child = len(self.queue) - 1
        while True:
            parent = math.floor((child - 1) / 2) if math.floor((child - 1) / 2) > 0 else 0
            if self.queue[child].priority > self.queue[parent].priority:
                self.swap(child, parent)
                child = parent
            else:
                return self.queue
    
    def extractMax(self):
        if len(self.queue) == 1: return self.queue.pop(-1)
        if len(self.queue) == 0: return self.queue
        self.swap(0, -1)
        popped = self.queue.pop(-1)
        parent = 0
        while True:
            left = 2 * parent + 1
            right = 2 * parent + 2
            leftPriority = self.check_index(left)
            rightPriority = self.check_index(right)
            if (leftPriority == 0 and rightPriority == 0) or (self.queue[parent].priority > leftPriority and self.queue[parent].priority > rightPriority): return popped
            if leftPriority >= rightPriority:
                self.swap(parent, left)
                parent = left
            elif rightPriority > leftPriority:
                self.swap(parent, right)
                parent = right
    
    #* Helps us print the queue a little neater
    def printQueue(self):
        for i, node in enumerate(self.queue): print(f'Position {i} - {node}')

pq = PriorityQue()
pq.insert(0, 10)
pq.insert(1, 20)
pq.insert(3, 20)
pq.insert(4, 20)
pq.insert(10, 20)
pq.printQueue()

print(pq.extractMax())
pq.printQueue()
print(pq.extractMax())
pq.printQueue()
print(pq.extractMax())
pq.printQueue()
print(pq.extractMax())
pq.printQueue()
print(pq.extractMax())
pq.printQueue()
print(pq.extractMax())
pq.printQueue()