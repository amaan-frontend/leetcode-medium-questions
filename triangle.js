
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const n = triangle.length;

    // Initialize a DP array to store the minimum path sums
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    // Initialize the bottom row of DP array with the values of the last row of the triangle
    for (let i = 0; i < n; i++) {
        dp[n - 1][i] = triangle[n - 1][i];
    }

    // Start from the second to last row and calculate the minimum path sum for each cell
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    // The minimum path sum will be at the top of the DP array
    return dp[0][0];
};
