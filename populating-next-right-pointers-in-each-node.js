class Node {
    constructor(val, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

function connect(root) {
    if (!root || !root.left) return root;
    
    root.left.next = root.right;
    if (root.next) {
        root.right.next = root.next.left;
    }
    
    connect(root.left);
    connect(root.right);
    
    return root;
}

// Helper function to print the tree
function printTree(root) {
    let result = [];
    let current = root;
    while (current !== null) {
        let temp = current;
        while (temp !== null) {
            result.push(temp.val);
            temp = temp.next;
        }
        result.push('#'); 
        current = current.left;
    }
    return result;
}

