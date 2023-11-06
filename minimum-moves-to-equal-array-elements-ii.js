/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array
    let median = nums[Math.floor(nums.length / 2)]; // Find the median

    let moves = 0;
    for (let i = 0; i < nums.length; i++) {
        moves += Math.abs(nums[i] - median); // Calculate absolute differences
    }

    return moves;
};
