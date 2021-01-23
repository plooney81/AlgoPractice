
#! firstDuplicate
#* Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate
#* number for which the second occurrence has the minimal index. In other words, if there are more than 1
#* duplicated numbers, return the number for which the second occurrence has a smaller index than the second
#* occurence of the other number does.
#? if there are no such elements, return -1
# firstDuplicate([2, 1, 3, 5, 3, 2]) --> 3
# firstDuplicate([2, 2]) --> 2
# firstDuplicate([2, 4, 3, 5, 1]) --> -1

def firstDuplicate(int_list):
    freqCounter = {}
    for number in int_list:
        freqCounter[number] = freqCounter[number] + 1 if number in freqCounter else 1
        if freqCounter[number] > 1: return number
    return -1

print(firstDuplicate([2, 1, 3, 5, 3, 2])) #3
print(firstDuplicate([2, 2])) #2
print(firstDuplicate([2, 4, 3, 5, 1])) #-1