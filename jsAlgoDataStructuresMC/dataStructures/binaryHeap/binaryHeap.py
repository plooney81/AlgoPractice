import math
class MaxBinaryHeap():
    def __init__(self):
        self.values = []

    def insert(self, val, i=0, child=0):
        if i == 0: self.values.append(val)
        if child == 0: child = len(self.values) - 1
        parent = math.floor((child - 1) / 2)

        if self.values[child] > self.values[parent]:
            self.values[child], self.values[parent] = self.values[parent], self.values[child]
            return self.insert(val, i + 1, parent)
        return self.values

    def check_index(self, index):
        try:
            return self.values[index]
        except IndexError:
            return 0
    
    def extractMax(self):
        self.values[0], self.values[len(self.values) - 1] = self.values[len(self.values) - 1], self.values[0]
        popped = self.values.pop(-1)
        parent = 0
        while True:
            left = 2 * parent + 1
            right = left + 1
            leftElement = self.check_index(left)
            rightElement = self.check_index(right)
            if self.values[parent] > leftElement and self.values[parent] > rightElement or leftElement == 0 and rightElement == 0: return popped
            if leftElement > rightElement:
                self.values[parent], self.values[left] = self.values[left], self.values[parent]
                parent = left
            elif rightElement > leftElement:
                self.values[parent], self.values[right] = self.values[right], self.values[parent]
                parent = right

maxBinaryVar = MaxBinaryHeap()
maxBinaryVar.insert(44)
maxBinaryVar.insert(15)
maxBinaryVar.insert(70)
maxBinaryVar.insert(99)
maxBinaryVar.insert(45)
maxBinaryVar.insert(100)
maxBinaryVar.insert(65)
maxBinaryVar.insert(40)
print(maxBinaryVar.insert(53))
print(maxBinaryVar.extractMax())
print(maxBinaryVar.values)