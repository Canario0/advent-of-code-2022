function visible(i: number, j: number, board: number[][]) {
  const tree = board[i][j];
  const treeLeftRow = board[i].slice(0, j);
  const treeRightRow = board[i].slice(j + 1);
  const treeTopColumn = [];
  for (let row = 0; row < i; row++) {
    treeTopColumn.push(board[row][j]);
  }
  const treeBottomColumn = [];
  for (let row = i + 1; row < board.length; row++) {
    treeBottomColumn.push(board[row][j]);
  }
  if (
    [treeRightRow, treeLeftRow, treeTopColumn, treeBottomColumn].some(
      (values) => Math.max(...values) < tree
    )
  ) {
    return true;
  }
  return false;
}
export function solve(board: number[][]): number {
  let visibleCount = board.length * 2 + (board.length - 2) * 2;
  visibleCount = board
    .slice(1, -1)
    .reduce(
      (acc, row, i) =>
        row
          .slice(1, -1)
          .reduce(
            (acc, _, j) => (visible(i + 1, j + 1, board) ? acc + 1 : acc),
            acc
          ),
      visibleCount
    );
  return visibleCount;
}
