
var minimumTotal = function (triangle) {
    const n = triangle.length;

    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        dp[n - 1][i] = triangle[n - 1][i];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
};
