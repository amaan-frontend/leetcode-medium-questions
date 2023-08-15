/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const ranges = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i < nums.length - 1 && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        let end = nums[i];

        if (start === end) {
            ranges.push(start.toString());
        } else {
            ranges.push(`${start}->${end}`);
        }
    }

    return ranges;
};
