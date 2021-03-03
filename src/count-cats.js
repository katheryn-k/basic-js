const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let cat = '^^';
    let allCats = [];
    arr.flat().map(item => item === cat ? allCats.push(item) : item);
    return allCats.length;
};
