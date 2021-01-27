from SinglyLinkedList import SinglyLinkedList
from SinglyLinkedList import ListNode

#! MergeTwoLinkedLists
#? Your Solution should have O(l1.length + l2.length) time complexity
#* Given two singly linked lists sorted in non-decreasing order, your task is to 
#* merge them. In other words, return a singly linked list, also sorted in non-
#* decreasing order, that contains the elements from both original lists.
# l1 = [1, 2, 3] l2 = [4, 5, 6]
# mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6]

# l1 = [1, 1, 2, 4] and l2 = [0, 3, 5]
# mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5]

def value_check(node):
    if node is not None:
        return node.value
    else:
        return float('inf')

def mergeTwoLinkedLists(l1, l2):
    head = None
    previous = None
    left = l1
    right = l2
    while left or right:

        if value_check(left) <= value_check(right):
            if not head:
                head = left
            if previous: previous.next = left
            previous = left
            if left: left = left.next

        else:
            if not head:
                head = right
            if previous: previous.next = right
            previous = right
            if right: right = right.next
        
    return head

sll = SinglyLinkedList()
sll.insert(1)
sll.insert(2)
sll.insert(3)

anotherll = SinglyLinkedList()
anotherll.insert(4)
anotherll.insert(5)
anotherll.insert(6)

print(mergeTwoLinkedLists(sll.head, anotherll.head))