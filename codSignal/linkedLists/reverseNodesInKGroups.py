from SinglyLinkedList import SinglyLinkedList

#! Reverse Nodes In K Groups
#? Note: Your solution should have O(n) time complexity, where n is the number of elements in l
#? and O(1) additional space complexity, since this is what you would be asked to accomplish in an interview.
#* Given a singly linked list l, reverse its nodes k at a time and return the modified list.
#* k is a positive integer that is less than or equal to the length of l.
# l = [1, 2, 3, 4, 5] and k = 2
# reverseNodesInKGroups(l, k) => [2, 1, 4, 3, 5]


def reverseNodesInKGroups(l, k):
    if not l:
        return l
    c = l
    n = k
    while c and n:
        c = c.next
        n -= 1
    if n:
        return l
    curr = l
    prev = None
    next = None
    n = k
    while curr and n:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        n -= 1
    if next:
        l.next = reverseNodesInKGroups(next, k)
    return prev