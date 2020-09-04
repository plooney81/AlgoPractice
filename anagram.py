# write a function called anagram that accepts two strings and return True if they are anagrams and false if they aren't.

# function that gets a single string from the user
def get_a_string():
    print('\n\nPlease input a string')
    while True:
        try:
            user_input = input('> ')
            to_int = int(user_input)
            print('\n\nInvalid input, please input a string')
        except ValueError:
            return user_input

# function that makes a string into a dictionary
def to_dictionary(some_string):
    #initialize our empty dictionary
    our_dictionary = {}
    for char in some_string.lower():
        if char == " ":
            pass
        elif char not in our_dictionary:
            our_dictionary[char] = 1
        else:
            our_dictionary[char] += 1

    return our_dictionary


# function that checks if the two dictionaries are anagrams
def are_they_anagrams():
    dict_1 = to_dictionary(get_a_string())
    dict_2 = to_dictionary(get_a_string())
    
    # short circuit
    if len(dict_1) != len(dict_2):
        return False
    
    # for key in dict_1:
    #     if key not in dict_2.keys():
    #         return False
    #     else:
    #         if dict_1[key] != dict_2[key]:
    #             return False
    # return True
    if dict_1 == dict_2:
        return True
    else:
        return False
            
    

print(f'\n\nAre they anagrams? {are_they_anagrams()}')