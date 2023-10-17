/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    function binarySearch(nums, target, leftMost) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                if (leftMost) right = mid - 1;
                else left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false);

    return [leftIndex, rightIndex];
};
