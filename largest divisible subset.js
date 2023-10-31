function largestDivisibleSubset(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    const dp = Array(n).fill(1); // Initialize dp array with 1s
    let maxLen = 1;
    let maxIdx = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
…
    return result;
}

