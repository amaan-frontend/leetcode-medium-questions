/**
 * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
    *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
      * }
       */
/**
 * @param {number} n
  * @return {TreeNode[]}
   */
var generateTrees = function (n) {
    if (n === 0) {
        return [];
    }

    return generateTreesHelper(1, n);
};

function generateTreesHelper(start, end) {
    const result = [];

    if (start > end) {
        result.push(null);
        return result;
    }

    for (let i = start; i <= end; i++) {
        const leftTrees = generateTreesHelper(start, i - 1);
        const rightTrees = generateTreesHelper(i + 1, end);

        for (const leftTree of leftTrees) {
            for (const rightTree of rightTrees) {
                const root = new TreeNode(i, leftTree, rightTree);
                result.push(root);
            }
        }
    }

    return result;
}
     
