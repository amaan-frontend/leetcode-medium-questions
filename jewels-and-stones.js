
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let jewelCount = 0;

    // Create a Set to store the jewel types for faster lookup
    const jewelSet = new Set(jewels);

    // Count the occurrences of each stone type that is also a jewel
    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) {
            jewelCount++;
        }
    }

    return jewelCount;
};
