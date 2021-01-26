from SinglyLinkedList import SinglyLinkedList

#! isListPalindrome
#? Note: Try to solve this task in O(n) time using O(1) additional space, 
#? where n is the number of elements in the list.
#* Given a singly linked list of integers, determine whether or not its a palindrome
#* Palindrome: Reads the same forwards as backwards
# l = [0, 1, 0]
# isListPalindrome(l) => True
def isListPalindrome(l):
    #find the length
    length = 0
    original = l
    while l:
        length += 1
        l = l.next

    #reverse the second half
    current = original
    index = 0
    previous = None
    while current:
        index += 1
        if index > length // 2: #i.e. is the second half of the LL
            temp = current.next
            current.next = previous
            previous = current
            current = temp
        else:
            current = current.next

    #compare the first half to the reversed second half
    #original is the original head, previous is now the head of the reversed second half
    while original and previous:
        if original.value != previous.value: return False
        original = original.next
        previous = previous.next

    return True

# sll = SinglyLinkedList()
# sll.insert(0)
# sll.insert(1)
# sll.insert(0)

# print(isListPalindrome(sll.head)) #True

sll2 = SinglyLinkedList()
sll2.insert(1)
sll2.insert(2)
sll2.insert(3)
sll2.insert(1)

print(isListPalindrome(sll2.head))