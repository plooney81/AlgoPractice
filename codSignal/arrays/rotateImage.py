
#!      rotateImage
#todo   Try and solve the task in place (meaning O(1) memory)
#* Given a n X n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise)
# a = [[1, 2, 3],
#      [4, 5, 6],
#      [7, 8, 9]]
# rotateImage(a) ==> 
    # [[7, 4, 1],
    #  [8, 5, 2],
    #  [9, 6, 3]]

def rotateImage(a):
    outputMatrix = []
    row = len(a) - 1
    column = 0
    newRow = []
    while column < len(a):
        newRow.append(a[row][column])
        row -= 1
        if row < 0:
            outputMatrix.append(newRow)
            newRow = []
            column += 1
            row = len(a) - 1
    return outputMatrix

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

print(rotateImage(a))