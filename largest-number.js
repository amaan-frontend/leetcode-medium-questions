function largestNumber(nums) {
    // Custom comparator function for sorting
    nums.sort((a, b) => {
        const str1 = a.toString() + b.toString();
        const str2 = b.toString() + a.toString();
        return str2.localeCompare(str1); // Compare as strings
    });

    // Handle edge case where all elements are 0
    if (nums[0] === 0) {
        return '0';
    }

    return nums.join('');
}
