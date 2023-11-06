/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) return 0;

    // Sort the balloons based on their end points
    points.sort((a, b) => a[1] - b[1]);

…    return arrows;
};
