import math

class Node:
    def __init__(self, cookTime, arrivalTime):
        self.cookTime = cookTime
        self.arrivalTime = arrivalTime
    def __str__(self):
        return f'Node [cookTime:{self.cookTime}, arrivalTime:{self.arrivalTime}]'

class PriorityQue:
    def __init__(self):
        self.queue = []
    
    def swap(self, index_1, index_2):
        self.queue[index_1], self.queue[index_2] = self.queue[index_2], self.queue[index_1]

    def check_index(self, index):
        try:
            return self.queue[index].cookTime
        except IndexError:
            return 100

    def insert(self, cookTime, arrivalTime):
        self.queue.append(Node(cookTime, arrivalTime))
        child = len(self.queue) - 1
        while True:
            parent = math.floor((child - 1) / 2) if math.floor((child - 1) / 2) > 0 else 0
            if self.queue[child].cookTime < self.queue[parent].cookTime:
                self.swap(child, parent)
                child = parent
            else:
                return self.queue
    
    def extractMin(self):
        if len(self.queue) == 0: return self.queue
        if len(self.queue) == 1: return self.queue.pop(-1)
        self.swap(0, -1)
        popped = self.queue.pop(-1)
        parent = 0
        while True:
            left = 2 * parent + 1
            right = 2 * parent + 2
            leftcookTime = self.check_index(left)
            rightcookTime = self.check_index(right)
            if (leftcookTime == 100 and rightcookTime == 100) or (self.queue[parent].cookTime < leftcookTime and self.queue[parent].cookTime < rightcookTime): return popped
            if leftcookTime <= rightcookTime:
                self.swap(parent, left)
                parent = left
            elif rightcookTime < leftcookTime:
                self.swap(parent, right)
                parent = right
    
    #* Helps us print the queue a little neater
    def printQueue(self):
        for i, node in enumerate(self.queue): print(f'Position {i} - {node}')

#* Minimum average wait time
#? Restaurant owner wants to minimize the average waiting time of his customers
#? Write a function that does that
# example minAverage([0, 3], [1, 9],[2, 6]) --> 9
def minAverage(list):
    # Creates a new instance of the PriorityQue Class
    pq = PriorityQue()
    # List to save the wait times for each customer
    waitTimes = []
    totalTime = 0
    # Inserts the list data into our new PriorityQue Class
    for customers in list: 
        if customers[0] == 0:
            waitTimes.append(customers[1])
            totalTime += customers[1]
        else:
            pq.insert(customers[1], customers[0])

    while len(pq.queue) > 0:
        newCustomer = pq.extractMin()
        newCustomerWaitTime = 0
        if totalTime < newCustomer.arrivalTime:
            newCustomerWaitTime = newCustomer.cookTime
            totalTime += newCustomer.cookTime
        else:
            totalTime += newCustomer.cookTime
            newCustomerWaitTime = totalTime - newCustomer.arrivalTime
        waitTimes.append(newCustomerWaitTime)

    return math.floor(sum(waitTimes)/len(waitTimes))


playList = [[0, 3], [1, 9],[2, 6]]
print(minAverage(playList)) # 9

anotherList = [[0, 9], [10, 4]]
print(minAverage(anotherList)) # 6