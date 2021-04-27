class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function sumBTIterative(root) {
    if(!root) return 0
    
    let sum = 0
    let queue = [root]
    while(queue.length){
        const curr = queue.shift()
        sum += curr.value
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return sum
}

function sumBTRecursive(root) {
    if(!root) return 0
    
    return root.value + sumBTRecursive(root.left) + sumBTRecursive(root.right) 
}

// Test Cases
console.log(sumBTIterative(null)) // 0
console.log(sumBTIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6 
console.log(sumBTIterative(new TreeNode(1))) // 1
console.log(sumBTRecursive(null)) // 0
console.log(sumBTRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6
console.log(sumBTRecursive(new TreeNode(1))) // 1
