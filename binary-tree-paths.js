
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const paths = [];

    function dfs(node, currentPath) {
        if (!node) return;

        // Add the current node's value to the current path
        currentPath += node.val.toString();

        // If the node is a leaf, add the current path to the result paths
        if (!node.left && !node.right) {
            paths.push(currentPath);
            return;
        }

        // Recurse on the left and right subtrees with updated paths
        dfs(node.left, currentPath + '->');
        dfs(node.right, currentPath + '->');
    }

    dfs(root, '');

    return paths;
};
