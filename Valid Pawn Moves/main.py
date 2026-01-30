def find_pawn_moves(position):
    moves = []

    if "2" in position:
        moves.append(f"{position[0]}{int(position[1]) + 1}")
        moves.append(f"{position[0]}{int(position[1]) + 2}")
    else:
        moves.append(f"{position[0]}{int(position[1]) + 1}")

    print(moves)
    return moves

find_pawn_moves("D4")