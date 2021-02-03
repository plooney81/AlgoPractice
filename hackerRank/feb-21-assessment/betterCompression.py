
#! Better Compression
#* Consider a string, S, that is a series of characters, each followed
#* by its frequency as an integer. The string is not compressed correctly
#* so there may be multiple occurrences of the same character. A properly
#* compressed string will consist of one instance of each character in alphabetical
#* order follwed by the total count of that character within the string.
#? EX: betterCompression('a3c9b2c1') --> 'a3b2c10'

# helper function that returns the coresponding value and index where the value ended
def returnsNextInt(s):
    returnString = ''
    for i, char in enumerate(s):
        if char.isdigit(): returnString += char
        else: return int(returnString), i
    return int(returnString), i

def betterCompression(s):
    newCounter, i = {}, 0
    # loop over the string finding char and frequency values
    while i < len(s):
        # test if the char is not a digit
        if not s[i].isdigit():
            # unpack the value and index returned from the helper function call with a 
            # slice of our current string (that doesn't include the current index)
            helperValue, helperIndex = returnsNextInt(s[i+1:])
            # initialize value to the specified val if key not in dictionary, else add on specified value
            newCounter[s[i]] = newCounter[s[i]] + helperValue if s[i] in newCounter else helperValue
            # set i to the return index from our helper function, adding 1
            i = helperIndex + i + 1
        else:i += 1
    
    #sort an array of the keys in alphabetical order
    counterKeys = sorted(newCounter.keys())
    
    # loop over sorted array of keys concatenating the key and value to a new string
    newString = ''
    for key in counterKeys:
        newString += f'{key}{newCounter[key]}'
    return newString


print(betterCompression('a3c9b2c1'))