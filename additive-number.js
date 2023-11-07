function isAdditiveNumber(num) {
    function dfs(num, index, num1, num2) {
        if (index === num.length) {
            return true;
        }

        let sum = num1 + num2;
        let sumStr = sum.toString();
        let len = sumStr.length;

…        }
    }

    return false;
}

