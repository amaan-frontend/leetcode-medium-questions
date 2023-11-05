function findRightInterval(intervals) {
    const n = intervals.length;
    const result = new Array(n).fill(-1);
    const sortedIntervals = intervals.map((interval, index) => [interval[0], interval[1], index]);

    sortedIntervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        const targetEnd = intervals[i][1];
…        }
    }

    return result;
}

