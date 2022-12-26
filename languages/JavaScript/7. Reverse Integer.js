/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let stringX = x.toString();
    let arrstr = stringX.split("");

    let arrstr_new = new Array();
    arrstr.forEach((element) => {
        arrstr_new.unshift(element);
    });

    if (arrstr_new[arrstr_new.length - 1] == "-") {
        arrstr_new.pop();
        arrstr_new.unshift("-");
    }

    if (
        parseInt(arrstr_new.join("")) > 2147483648 ||
        parseInt(arrstr_new.join("")) < -2147483648
    )
        return 0;
    else return parseInt(arrstr_new.join(""));
};

console.log(reverse(1534236469));
