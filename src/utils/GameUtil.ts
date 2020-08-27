const cellNeighbourCount = (board: boolean[][], y: number, x: number) => {
  let count = 0;
  let isYOuterEdge = y >= board.length - 1;
  let isXOuterEdge = x >= board.length - 1;
  let isYLowerEdge = y <= 0;
  let isXLowerEdge = x <= 0;

  if (!isYOuterEdge && !isXOuterEdge && board[y + 1][x + 1]) count++;
  if (!isYOuterEdge && board[y + 1][x]) count++;
  if (!isYOuterEdge && !isXLowerEdge && board[y + 1][x - 1]) count++;
  if (!isXOuterEdge && board[y][x + 1]) count++;
  if (!isXLowerEdge && board[y][x - 1]) count++;
  if (!isYLowerEdge && !isXOuterEdge && board[y - 1][x + 1]) count++;
  if (!isYLowerEdge && board[y - 1][x]) count++;
  if (!isYLowerEdge && !isXLowerEdge && board[y - 1][x - 1]) count++;
  return count;
};

const nextGenerationCells = (cells: boolean[][]) =>
  cells.map((row, y) =>
    row.map((isAlive, x) => {
      let neighbourCount = cellNeighbourCount(cells, y, x);
      return (
        (isAlive && (neighbourCount === 2 || neighbourCount === 3)) ||
        (!isAlive && neighbourCount === 3)
      );
    })
  );

export { nextGenerationCells };
