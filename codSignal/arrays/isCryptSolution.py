
#! isCryptSolution
#* A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and 
#* digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

def isCryptSolution(crypt, solution):
    # build the solution dictionary
    solutionMap = {}
    for solutionRow in solution:
        if not (solutionRow[0] in solutionMap):
            solutionMap[solutionRow[0]] = solutionRow[1]
    
    # change the strings into the decoded numbers, if any word has a 0 at the beginning, return False
    for i, word in enumerate(crypt):
        decoded = ''
        for j, letter in enumerate(word):
            if j == 0 and solutionMap[letter] == '0' and len(word) > 1: return False
            decoded += solutionMap[letter]
        crypt[i] = int(decoded)
    # check if the addition of the numbers from 0 to second to last number equals the last number
    sumToSecondLast = 0
    for i in range(0, len(crypt) - 1): sumToSecondLast += crypt[i]
    return sumToSecondLast == crypt[-1]

crypt = ["SEND", 
        "MORE", 
        "MONEY"]
solution = [["O","0"], 
            ["M","1"], 
            ["Y","2"], 
            ["E","5"], 
            ["N","6"], 
            ["D","7"], 
            ["R","8"], 
            ["S","9"]]

print(isCryptSolution(crypt, solution)) #true