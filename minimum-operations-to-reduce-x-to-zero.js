function minOperations(nums, x) {
    const target = nums.reduce((acc, num) => acc - num, x);
    if (target === 0) return nums.length; // If sum of array elements is equal to x, no need to remove any elements

    let left = 0;
    let maxSubarrayLength = -1;
    let currentSum = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        while (currentSum > target) {
            currentSum -= nums[left];
            left++;
        }

        if (currentSum === target) {
            maxSubarrayLength = Math.max(maxSubarrayLength, right - left + 1);
        }
    }

    return maxSubarrayLength !== -1 ? nums.length - maxSubarrayLength : -1;
}

