/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    var result = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[0].length; j++) {
            sum += accounts[i][j];
        }
        result = Math.max(sum, result);
    }
    return result;
};
