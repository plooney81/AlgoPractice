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