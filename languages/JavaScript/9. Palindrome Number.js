/**
 * link: https://leetcode.com/problems/palindrome-number/description/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let stringX = x.toString();
    let flag = true;
    for (let i = 0, j = stringX.length - 1; i < stringX.length / 2; i++, j--) {
        if (stringX[i] != stringX[j]) flag = false;
    }
    return flag;
};

console.log(isPalindrome(1221));
