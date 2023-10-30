
class Solution {
    constructor(nums) {
        this.nums = nums;
    }

    pick(target) {
        let count = 0;
        let result = -1;

        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] === target) {
                count++;
                // With probability 1/count, replace the result with the current index
                if (Math.floor(Math.random() * count) === 0) {
                    result = i;
                }
            }
        }

        return result;
    }
}
