def tic_tac_toe(board):
    for i in range(0,len(board),1):
        winner = find_winner(board[i])

        if winner:
            return winner

        winner = find_winner(get_col_arr(i,board))
        if winner:
            return winner

    winner = check_diagonals(board)

    if winner:
        return winner

    return "Draw"

def find_winner(row):
    row_set = set(row)

    if len(row_set) == 1:
        return f"{row_set.pop()} wins"
    
    return False

def get_col_arr(i,board):
    arr = []
    for j in range(0,len(board),1):
        arr.append(board[j][i])
    return arr

def check_diagonals(board):
    diagonals = [
        [],[]
    ]
    for i in range(0,len(board),1):
        diagonals[0].append(board[i][i])
        diagonals[1].append(board[i][(len(board)-1)-i])
  
    for i in range(0,len(diagonals),1):
        winner = find_winner(diagonals[i])
        if winner:
            return winner
    
print(
tic_tac_toe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]))