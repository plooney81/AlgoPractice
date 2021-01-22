import math

class Node:
    def __init__(self, cookTime, arrivalTime, val):
        self.cookTime = cookTime
        self.arrivalTime = arrivalTime
        self.val = val
    def __str__(self):
        return f'Node [cookTime:{self.cookTime}, arrivalTime:{self.arrivalTime} val:{self.val}]'

class PriorityQue:
    def __init__(self):
        self.queue = []
    
    def swap(self, index_1, index_2):
        self.queue[index_1], self.queue[index_2] = self.queue[index_2], self.queue[index_1]

    def check_index(self, index):
        try:
            return self.queue[index].cookTime
        except IndexError:
            return 0

    def insert(self, cookTime, arrivalTime, val):
        self.queue.append(Node(cookTime, arrivalTime, val))
        child = len(self.queue) - 1
        while True:
            parent = math.floor((child - 1) / 2) if math.floor((child - 1) / 2) > 0 else 0
            if self.queue[child].cookTime > self.queue[parent].cookTime:
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
            leftcookTime = self.check_index(left)
            rightcookTime = self.check_index(right)
            if (leftcookTime == 0 and rightcookTime == 0) or (self.queue[parent].cookTime > leftcookTime and self.queue[parent].cookTime > rightcookTime): return popped
            if leftcookTime >= rightcookTime:
                self.swap(parent, left)
                parent = left
            elif rightcookTime > leftcookTime:
                self.swap(parent, right)
                parent = right
    
    #* Helps us print the queue a little neater
    def printQueue(self):
        for i, node in enumerate(self.queue): print(f'Position {i} - {node}')

#* Minimum average wait time
#? Restaurant owner wants to minimize the average waiting time of his customers
#? Write a function that does that
# example minAverage([0, 3], [1, 9],[2, 6]) --> 9
