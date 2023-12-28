var maxChunksToSorted = function (arr) {
    let n = arr.length;
    let left = n;
    let count = 0;
    for (let i = n - 1; i >= 0; --i) {
        left = Math.min(left, arr[i]);
        if (left === i) count++;
    }
    return count;
};
