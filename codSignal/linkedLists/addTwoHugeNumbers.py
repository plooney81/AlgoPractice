from SinglyLinkedList import SinglyLinkedList
from SinglyLinkedList import ListNode

#! AddTwoHugeNumbers
#* You are given 2 huge integers represented by linked lists
#* Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits
#* The represented number might have leading zeros. Your task is to add up these huge integers and
#* return the result in the same format
# a = [9876, 5432, 1999] b = [1, 8001]
# addTwoHugeNumbers(a, b) => [9876, 5434, 0]
# Explanation: 987654321999 + 18001 = 987654340000.

# a = [123, 4, 5] b = [100, 100, 100]
# addTwoHugeNumbers(a, b) => [223, 104, 105]
# Explanation: 12300040005 + 10001000100 = 22301040105
#? Function for reversing a list
def reverse(l):
    current = l
    previous = None
    while current is not None:
        temp = current.next
        current.next = previous
        previous = current
        current = temp
    return previous

#? Checks if the node isn't None: 
#? if it is none it returns zero, else it returns the nod.value
def value_check(node):
    if node is not None:
        return node.value
    else:
        return 0

def addTwoHugeNumbers(a, b):
    a = reverse(a)
    b = reverse(b)
    
    #? Holds our carry over value
    carry = 0
    result = None
    while a is not None or b is not None or carry > 0:
        add = value_check(a) + value_check(b) + carry
        node = ListNode(add % 10000)
        node.next = result

        result = node
        carry = add // 10000

        if a is not None: a = a.next
        if b is not None: b = b.next
    return result

# a = SinglyLinkedList()
# a_list = [123, 4, 5]
# for numb in a_list: a.insert(numb)
# b = SinglyLinkedList()
# b_list = [0]
# for numb in b_list: b.insert(numb)
# print(addTwoHugeNumbers(a.head, b.head)) # [123, 4, 5]

c = SinglyLinkedList()
c_list = [123, 4, 5]
for numb in c_list: c.insert(numb)
d = SinglyLinkedList()
d_list = [100, 100, 100]
for numb in d_list: d.insert(numb)
print(addTwoHugeNumbers(c.head, d.head))