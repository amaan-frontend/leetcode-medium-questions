/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const previousInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval[0] <= previousInterval[1]) {
            previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
};
