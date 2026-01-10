function ticTacToe(board) {
    console.table(board);
    
    for(let i = 0;i<board.length;i++){
        // check row
        let winnerFound = findWinner(board[i]);
        if(winnerFound) return winnerFound;
        // check column
        winnerFound = findWinner(getColumnArr(i,board));
        if(winnerFound) return winnerFound;
    }

    // Check diagonal
    let diagonalWinner = checkDiagonal(board);
    if(diagonalWinner) return diagonalWinner;

    return "Draw";
}

function getColumnArr(i,board){
    const arr = [];
    for(let j=0;j<board.length;j++){
        arr.push(board[j][i]);
    }
    return arr;
}

function checkDiagonal(board){
    let diagonals = [
        [],
        []
    ];
    for(let i = 0;i<board.length;i++){
        diagonals[0].push(board[i][i]);
        diagonals[1].push(board[i][(board.length-1)-i]);
    }
    // console.table(diagonals);
    for(let i=0;i<diagonals.length;i++){
        let winnerFound = findWinner(diagonals[i]);
        if(winnerFound){
            return winnerFound;
        }
    }

    // console.log(board[i][i])
    // console.log(i)
    // console.log((board.length-1)- i)
    /** i       (n - 1) - i
        0 , 2 =  (3 - 1) - 0 = 2
        1 , 1 =  (3 - 1) - 1 = 1
        2 , 0 =  (3 - 1) - 2 = 0    
     */
}

function findWinner(row){
    let rowSet = new Set(row);
    if(rowSet.size == 1){
        return `${rowSet.values().next().value} wins`;
    }
    return false;
}


console.log(
// ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]])
// ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]) 
ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]])
// ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]])
)