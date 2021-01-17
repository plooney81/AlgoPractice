
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


def postOrder(root):
    def traverse(node):
        if node.left: traverse(node.left)
        if node.right: traverse(node.right)
        print(node.info, end=' ')
    traverse(root)
