# Write a function called count that accepts a string and returns a dictionary containing the counts of each character in the string.

def returns_a_dict(some_string):
    # initialize our empty dictionary
    our_dict = {}
    for char in some_string.lower():
        if char == ' ':
            pass
        else:
            if char not in our_dict:
                our_dict[char] = 1
            else:
                our_dict[char] += 1
    return our_dict

# call the user to input a string and input validation 
print('\n\nPlease input a string')
while True:
    try:
        user_input = input('> ')
        to_int = int(user_input)
        print('\n\nInvalid input, please input a string')
    except ValueError:
        break

# function call that saves the return to the variable char_dictionary
char_dictionary = returns_a_dict(user_input)

print(f'\n\n{char_dictionary}\n\n')