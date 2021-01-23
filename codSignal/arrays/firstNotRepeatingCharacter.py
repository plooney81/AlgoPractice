
#! firstNotRepeatingCharacter
#* Given a string (str) consisting of small English letters, find and return the first instace of a
#* non-repeating character in it. 
#? If there is no such character, return '_'.
# fnrpc("abacabad") -> 'c'

def firstNotRepeatingCharacter(input_str):
    charCounter = {}
    for char in input_str: charCounter[char] = charCounter[char] + 1 if char in charCounter else 1
    for char in input_str: 
        if charCounter[char] == 1: return char
    return '_'

print(firstNotRepeatingCharacter("abacabad"))
print(firstNotRepeatingCharacter("abacabaabacaba"))