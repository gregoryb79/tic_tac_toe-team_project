export function checkcolumn(){
    return winner;
}

export function checkrow(){
    return winner;
}

export function checkdiagonals(){
    return winner;
}

export function storeScore(){

}

export function updateBoard(row:number, column:number,mark:string){
    
    board[row][column] = mark;
}

let board: string[][] = [];