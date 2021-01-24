
#! Sudoku
#* Sukoku is a number-placement puzzle. The objective is to fill a 9X9 grid with numbers in 
#* such a way that each column, each row, and each of the nine 3X3 sub-grids that compose
#* the grid all contain all of the numbers from 1 to 9 one time.
#? Implement an algorithm that will check whether the given grid of numbers represents a valid
#? Sudoku puzzle according to the layout rules described above. Note that the puzzle represented
#? in grid does not have to be solvable.
# grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
#         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
#         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
#         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
#         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
#         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
#         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
#         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
#         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
# sudoku(grid) --> true
def checkIfInt(string):
    try:
        return int(string)
    except ValueError:
        return 0

def sudoku2(grid):
    # checks each row if any duplicates
    for row in grid:
        rowCounter = {}
        for char in row:
            toInt = checkIfInt(char)
            if toInt > 0:
                if toInt in rowCounter: return False
                rowCounter[toInt] = 1


    # checks columns if any duplicates
    row = 0
    column = 0
    columnCounter = {}
    while column < len(grid):
        char = grid[row][column]
        toInt = checkIfInt(char)
        if toInt > 0:
            if char in columnCounter: return False
            columnCounter[char] = 1
        row += 1
        if row > len(grid) - 1:
            row = 0
            column += 1
            columnCounter = {}

    # checks each grid section
    sectionCounters = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    for i in range(0, 8):
        for j in range(0, 8):
            char = grid[i][j]
            toInt = checkIfInt(char)
            if toInt > 0:
                
                if i >= 0 and i <= 2:
                    if j >= 0 and j <= 2:
                        if toInt in sectionCounters[0]: return False
                        sectionCounters[0][toInt] = 1
                    elif j >= 3 and j <= 5:
                        if toInt in sectionCounters[1]: return False
                        sectionCounters[1][toInt] = 1
                    else:
                        if toInt in sectionCounters[2]: return False
                        sectionCounters[2][toInt] = 1

                
                elif i >= 3 and i <= 5:
                    if j >= 0 and j <= 2:
                        if toInt in sectionCounters[3]: return False
                        sectionCounters[3][toInt] = 1
                    elif j >= 3 and j <= 5:
                        if toInt in sectionCounters[4]: return False
                        sectionCounters[4][toInt] = 1
                    else:
                        if toInt in sectionCounters[5]: return False
                        sectionCounters[5][toInt] = 1
                
                
                else:
                    if j >= 0 and j <= 2:
                        if toInt in sectionCounters[6]: return False
                        sectionCounters[6][toInt] = 1
                    elif j >= 3 and j <= 5:
                        if toInt in sectionCounters[7]: return False
                        sectionCounters[7][toInt] = 1
                    else:
                        if toInt in sectionCounters[8]: return False
                        sectionCounters[8][toInt] = 1    
    return True






grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

grid2 = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

grid3 =  [  [".",".","5",".",".",".",".",".","."], 
            [".",".",".","8",".",".",".","3","."], 
            [".","5",".",".","2",".",".",".","."], 
            [".",".",".",".",".",".",".",".","."], 
            [".",".",".",".",".",".",".",".","9"], 
            [".",".",".",".",".",".","4",".","."], 
            [".",".",".",".",".",".",".",".","7"], 
            [".","1",".",".",".",".",".",".","."], 
            ["2","4",".",".",".",".","9",".","."]]

print(sudoku(grid))
print(sudoku(grid2))
print(sudoku(grid3))