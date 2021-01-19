class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None
        self.freq = 0
    
    def __str__(self):
        return str(self.info)

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val, current=0):
        if not current and not self.root:
            self.root = Node(val)
            return self
        if not current: current = self.root
        if val == current.info:
            current.freq += 1
            return self
        elif val < current.info:
            if current.left: return self.insert(val, current.left)
            current.left = Node(val)
        elif val > current.info:
            if current.right: return self.insert(val, current.right)
            current.right = Node(val)

#* Tree: Preorder Traversal
#? Must print the values in the tree's preorder traversal as a single line of space-separated values
# EX Tree:
#      1
#       \
#         2
#          \
#            5
#          /   \
#         3     6
#        /
#       4
# Output => 1, 2, 5, 3, 4, 6

# node structure:
# class Node {
#     public:
#         int data;
#         Node *left;
#         Node *right;
#         Node(int d) {
#             data = d;
#             left = NULL;
#             right = NULL;
#         }
# };

def preOrder(root):
    def traverse(node):
        print(node.info, end=' ')
        if node.left: traverse(node.left)
        if node.right: traverse(node.right)
    traverse(root)



#* Tree: Postorder Traversal
#? Must print the values in the tree's postorder traversal as a single line of space-separated values
# EX Tree:
#      1
#       \
#         2
#          \
#            5
#          /   \
#         3     6
#        /
#       4
# Output => 4 3 6 5 2 1

def postOrder(root):
    def traverse(node):
        if node.left: traverse(node.left)
        if node.right: traverse(node.right)
        print(node.info, end=' ')
    traverse(root)


#* Tree: Inorder Traversal:
#? Must print the values in the tree's inorder traversal as a single line of space-separated values.
# EX Tree:
#      1
#       \
#         2
#          \
#            5
#          /   \
#         3     6
#        /
#       4
# Output => 1 2 3 4 5 6

def inOrder(root):
    def traverse(node):
        if node.left: traverse(node.left)
        print(node.info, end=' ')
        if node.right: traverse(node.right)
    traverse(root)

#* Tree: Height of a Binary Tree
#? Height of a binary tree is the number od edges between the tree's root and its furthest leaf.
#? Function must return the height of a binary tree as an integer
def height(root):
    def traverse(node):
        if node is None: return 0
        return 1 + max(traverse(node.left), traverse(node.right))
    return traverse(root) - 1


#* Tree: Top View
#? Given a pointer to the root of a binary tree, print the top view of the binary tree.
#? The tree seen from teh top nodes, is called the top view of the tree

# def left_view(root):
#     if not root: return
#     print(root.info, end=' ')
#     left_view(root.left)

# def right_view(root):
#     if not root: return
#     print(root.info, end=' ')
#     right_view(root.right)

# def topView(root):
#     left_view(root.left)
#     print(root.info, end=' ')
#     right_view(root.right)

def topView(root):
    ret = []
    q = []
    s = set()
    q.append([root, 0])
    
    while len(q) > 0:
        x = q.pop(0)
        if x[1] not in s:
            s.add(x[1])
            ret.append([x[0].info, x[1]])
        if x[0].left:
            q.append([x[0].left, x[1] - 1])
        if x[0].right:
            q.append([x[0].right, x[1] + 1])
        
    ret.sort(key = lambda x: x[1])
    ret = [x[0] for x in ret]
        
    print(' '.join([str(x) for x in ret]))

# TestBst = BST()
# testList = [1, 14, 3, 7, 4, 5, 15, 6, 13, 10, 11, 2, 12, 8, 9]
# for num in testList: TestBst.insert(num)
# topView(TestBst.root) #2 1 14 15 12


#* Tree: Level Order Traversal
#? Given a pointer to the root of a binary tree, you need to print the level order traversal of this tree.
#? In level-order traversal, nodes are visited level by level from left to right.
def levelOrder(root):
    q = []
    ret = []
    q.append(root)
    while len(q) > 0:
        popped = q.pop(0)
        ret.append(popped.info)
        if popped.left:
            q.append(popped.left)
        if popped.right:
            q.append(popped.right)
    print(' '.join([str(x) for x in ret]))

#* Binary Search Tree: Insertion
#? Given a pointer to the root of a binary search tree and values to be inserted into the tree.
#? Insert the values into their appropriate position in the binary search tree and return the root of the updated binary tree.
# solved on line 16-32

TestBst = BST()
testList = [1, 2, 5, 3, 6, 4]
for num in testList: TestBst.insert(num)

# postOrder(TestBst.root)
# # preOrder(TestBst.root)
# inOrder(TestBst.root)
# print(height(TestBst.root))
# topView(TestBst.root)
levelOrder(TestBst.root)