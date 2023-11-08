function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    function wordBreakHelper(start) {
        if (start === s.length) {
            return [[]];
        }

        if (memo.has(start)) {
            return memo.get(start);
        }

        const validSentences = [];
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const nextSentences = wordBreakHelper(end);
                for (const sentence of nextSentences) {
                    validSentences.push([word, ...sentence]);
                }
            }
        }

        memo.set(start, validSentences);
        return validSentences;
    }

    const sentences = wordBreakHelper(0);
    return sentences.map(words => words.join(' '));
}

