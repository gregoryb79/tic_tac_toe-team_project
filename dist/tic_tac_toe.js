export function checkcolumn() {
    return winner;
}
export function checkrow() {
    return winner;
}
export function checkDiagonals() {
    let xSrt = 0;
    let oSrt = 0;
    let xSlb = 0;
    let oSlb = 0;
    const size = board.length;
    for (let i = 0; i < size; i++) {
        if (board[i][i] === "X") {
            xSrt++;
        }
        if (board[i][i] === "O") {
            oSrt++;
        }
        if (board[size - 1 - i][i] === "X") {
            xSlb++;
        }
        if (board[size - 1 - i][i] === "O") {
            oSlb++;
        }
    }
    if ((xSrt === size) || (xSlb === size)) {
        return "X";
    }
    if ((oSrt === size) || (oSlb === size)) {
        return "O";
    }
    return "none";
}
export function storeScore() {
}
export function updateBoard(row, column, mark) {
    board[row][column] = mark;
}
export function resetBoard(size) {
}
let board = [];
export function testCheckDiagonals() {
    console.log("test check diagonals");
    board = [["X", "O", "O"],
        ["O", "O", ""],
        ["O", "", "X"],];
    console.log(board);
    console.log(board.length);
    const winner = checkDiagonals();
    console.log(`winner is: ${winner}`);
}
//testCheckDiagonals();
