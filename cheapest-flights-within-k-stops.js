var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = Array(n).fill(Number.MAX_SAFE_INTEGER)
    prices[src] = 0

    for (let i = 0; i < k + 1; i++) {
        const tmp = prices.slice()
        for (let [s, d, p] of flights) {
            if (prices[s] === Number.MAX_SAFE_INTEGER) continue
            tmp[d] = Math.min(tmp[d], prices[s] + p) 
              }

        prices = tmp
    }

    return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst] 
};
