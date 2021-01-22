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
    
    #* Helps us print the queue a little neater
    def printQueue(self):
        for i, node in enumerate(self.queue): print(f'Position {i} - {node}')

pq = PriorityQue()
pq.insert(0, 10)
pq.insert(1, 20)
pq.insert(1, 20)
pq.insert(1, 20)
pq.insert(10, 20)
pq.printQueue()