function decodeString(s) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push({ num: currentNum, str: currentStr });
…    return currentStr;
}

