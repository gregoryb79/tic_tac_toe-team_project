"use strict";
exports.__esModule = true;
exports.resetBoard = exports.updateBoard = exports.storeScore = exports.checkdiagonals = exports.checkrow = exports.checkcolumn = void 0;
function checkcolumn() {
    return winner;
}
exports.checkcolumn = checkcolumn;
function checkrow() {
    return winner;
}
exports.checkrow = checkrow;
function checkdiagonals() {
    return winner;
}
exports.checkdiagonals = checkdiagonals;
function storeScore() {
}
exports.storeScore = storeScore;
function updateBoard(row, column, mark) {
    board[row][column] = mark;
}
exports.updateBoard = updateBoard;
function resetBoard(size) {
}
exports.resetBoard = resetBoard;
var board = [];
