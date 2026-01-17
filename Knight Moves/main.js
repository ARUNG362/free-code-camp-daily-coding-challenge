function knightMoves(position) {
  const col = position.charCodeAt(0) - 64;
  const row = parseInt(position[1], 10);

  const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  let count = 0;

  for (const [dx, dy] of moves) {
    const newCol = col + dx;
    const newRow = row + dy;

    if (
      newCol >= 1 && newCol <= 8 &&
      newRow >= 1 && newRow <= 8
    ) {
      count++;
    }
  }

  return count;
}

console.log(
    knightMoves("A1")
)
