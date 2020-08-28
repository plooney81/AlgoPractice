# write a function called most_characters that accepts a string, and return the character that appears the most.
# so most_characters("abcda") should return "a".

def most_characters(string):
    dictionary = {}
    for char in string:
        if char not in dictionary:
            dictionary[char] = 1
        else:
            dictionary[char] += 1
    
    # list to house the highest frequency and that character
    highest_frequency = [0, '']
    for key in dictionary:
        if dictionary[key] > highest_frequency[0]:
            highest_frequency[0] = dictionary[key]
            highest_frequency[1] = key
        elif dictionary[key] == highest_frequency[0]:
            highest_frequency[1] += f' and {key}'
    
    return highest_frequency[1]


print(most_characters("Pette"))
print(most_characters("Gerrit"))