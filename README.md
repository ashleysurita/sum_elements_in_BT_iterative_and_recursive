# sum_elements_in_BT_iterative_and_recursive

### Problem:
Javascript
```
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function sumBTIterative(root) {
    // Write your code here.
    return -1
}

function sumBTRecursive(root) {
    // Write your code here.
    return -1
}

// Test Cases
console.log(sumBTIterative(null)) // 0
console.log(sumBTIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6 
console.log(sumBTIterative(new TreeNode(1))) // 1
console.log(sumBTRecursive(null)) // 0
console.log(sumBTRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6
console.log(sumBTRecursive(new TreeNode(1))) // 1
```

Python
```
class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def sumBTIterative(root: TreeNode) -> int:
    # Write your code here.
    pass

def sumBTRecursive(root: TreeNode) -> int:
    # Write your code here.
    pass

# Test Cases
print(sumBTIterative(None)) # 0
print(sumBTIterative(TreeNode(1, TreeNode(2), TreeNode(3)))) # 6
print(sumBTIterative(TreeNode(1))) # 1
print(sumBTRecursive(None)) # 0
print(sumBTRecursive(TreeNode(1, TreeNode(2), TreeNode(3)))) # 6
print(sumBTRecursive(TreeNode(1))) # 1
```
