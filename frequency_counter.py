# write a function called has_same_digit_frequency that accepts two lists and returns whether they have the same frequency of digits

# function that takes a list of numbers and returns a dictionary with frequency of each number
def create_frequency_dict(some_list):
    dictionary = {}
    # assigns the lists values to a dictionary, if that value doesn't already exist as a key, then it adds it, and initiates the value to 1
    # if the key already exists, then we add one to the value for that key
    for number in some_list:
        if number not in dictionary:
            dictionary[number] = 1
        else:
            dictionary[number] += 1
    return dictionary

def has_same_digit_frequency(list1, list2):
    # call our create_dicitonary for each list and assign to dict_1 and dict_2 respectively
    dict_1 = create_frequency_dict(list1)
    dict_2 = create_frequency_dict(list2)
    

    # first we check if then dicitonaries are the same length, if they aren't, then we return false
    if len(dict_1) != len(dict_2):
        return False
    else:
        # loop through the first dictionary keys and first check if that same key exists in the second dictionary, if not then we return false
        # if the same key exists in the second dictionary, then we check if the values from both diciontaries at that key are the same
        # if not then we also return false.
        for key in dict_1:
            if key in dict_2:
                if dict_1[key] == dict_2[key]:
                    pass
                else:
                    False
            else:
                return False
        # if we can iterate through the entire dictionary without getting a return false, then they are all the same frequency and we return True
        return True

first_list = [2,2,3]
second_list = [3,2,2]

print(f'\n\nDo the lists {first_list} and {second_list} have the same frequency of digits?\n{has_same_digit_frequency(first_list, second_list)}\n\n')