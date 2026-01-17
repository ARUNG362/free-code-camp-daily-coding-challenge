def knight_moves(position):
    col = ord(position[0]) - ord('A') + 1
    row = int(position[1])

    moves = [
        (2, 1), (2, -1), (-2, 1), (-2, -1),
        (1, 2), (1, -2), (-1, 2), (-1, -2)
    ]

    count = 0

    for dx, dy in moves:
        new_col = col + dx
        new_row = row + dy

        if 1 <= new_col <= 8 and 1 <= new_row <= 8:
            count += 1

    return count

print(
    knight_moves("A1")
)