
var allPossibleFBT = function (n) {
    if (n === 1) {
        return [new TreeNode(0)];
    }

    const trees = [];

    for (let leftNodes = 1; leftNodes < n; leftNodes += 2) {
        const rightNodes = n - 1 - leftNodes;

        const leftSubtrees = allPossibleFBT(leftNodes);
        const rightSubtrees = allPossibleFBT(rightNodes);

        for (const leftSubtree of leftSubtrees) {
            for (const rightSubtree of rightSubtrees) {
                const root = new TreeNode(0);
                root.left = leftSubtree;
                root.right = rightSubtree;
                trees.push(root);
            }
        }
    }

    return trees;
};
