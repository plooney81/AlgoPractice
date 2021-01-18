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
            else: 
                current.left = Node(val)
        elif val > current.info:
            if current.right: return self.insert(val, current.right)
            else:
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
def topView(root):
    def traverse(node):
        if node.left:
            print(node.info, end=' ')
            traverse(node.left)
        if node.right:
            print(node.info, end=' ')
            traverse(node.right)
    traverse(root)

TestBst = BST()
TestBst.insert(1)
TestBst.insert(2)
TestBst.insert(5)
TestBst.insert(3)
TestBst.insert(6)
TestBst.insert(4)

# postOrder(TestBst.root)
# # preOrder(TestBst.root)
# inOrder(TestBst.root)
# print(height(TestBst.root))
topView(TestBst.root)