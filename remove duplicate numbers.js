function removeDuplicateLetters(s) {
    const stack = [];
    const seen = new Set();
    const lastOccurrence = {};

    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
…        }
    }

    return stack.join('');
}
