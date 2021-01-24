from SinglyLinkedList import SinglyLinkedList

#! Remove K From List
#? Note: Try to solve this task in O(n) time using O(1) additional space, 
#? where n is the number of elements in the list.
#* Given a singly linked list of integers l and an integer k, remove all elements 
#* from list l that have a value equal to k. 

def removeKFromList(l, k):
    current = l
    while current:
        if current.next and current.next.value == k:
            current.next = current.next.next
        else:
            current = current.next
    return l.next if l and l.value == k else l

sll = SinglyLinkedList()
sll.insert(1000)
sll.insert(1000)
print(removeKFromList(sll.head, 1000))