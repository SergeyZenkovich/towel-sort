// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    let arr = [];
    for (var i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            arr.push(...matrix[i]);
        } else {
            arr.push(...matrix[i].reverse());
        }
    }

    return arr;
};
