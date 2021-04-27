class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def sumBTIterative(root: TreeNode) -> int:
    if not root:
        return 0
    
    sum = 0
    queue = [root]
    while len(queue):
        curr = queue.pop(0)
        sum += curr.value
        if curr.left:
            queue.append(curr.left)
        if curr.right:
            queue.append(curr.right)
    return sum

def sumBTRecursive(root: TreeNode) -> int:
    if not root:
        return 0
    
    return root.value + sumBTRecursive(root.left) + sumBTRecursive(root.right)

# Test Cases
print(sumBTIterative(None)) # 0
print(sumBTIterative(TreeNode(1, TreeNode(2), TreeNode(3)))) # 6
print(sumBTIterative(TreeNode(1))) # 1
print(sumBTRecursive(None)) # 0
print(sumBTRecursive(TreeNode(1, TreeNode(2), TreeNode(3)))) # 6
print(sumBTRecursive(TreeNode(1))) # 1
