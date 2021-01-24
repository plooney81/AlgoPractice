class ListNode(object):
    def __init__(self, value):
        self.value = value
        self.next = None
    def __str__(self):
        return f'Node - [value:{self.value} next:{self.next}]'

class SinglyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def __str__(self):
        return f'HEAD:[{self.head}] TAIL: [{self.tail}]'

    def insert(self, value):
        newNode = ListNode(value)
        if self.length == 0: self.head = newNode
        else: self.tail.next = newNode
        self.tail = newNode
        self.length += 1
