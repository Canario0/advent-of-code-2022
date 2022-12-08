function score(i: number, j: number, board: number[][]): number {
  const tree = board[i][j];
  const treeLeftRow = board[i].slice(0, j).reverse();
  const treeRightRow = board[i].slice(j + 1);
  const treeTopColumn = [];
  for (let row = 0; row < i; row++) {
    treeTopColumn.push(board[row][j]);
  }
  treeTopColumn.reverse();
  const treeBottomColumn = [];
  for (let row = i + 1; row < board.length; row++) {
    treeBottomColumn.push(board[row][j]);
  }
  const rightIndex = treeRightRow.findIndex(
    (neighbourTree) => neighbourTree >= tree
  );
  const leftIndex = treeLeftRow.findIndex(
    (neighbourTree) => neighbourTree >= tree
  );
  const topIndex = treeTopColumn.findIndex(
    (neighbourTree) => neighbourTree >= tree
  );
  const bottomIndex = treeBottomColumn.findIndex(
    (neighbourTree) => neighbourTree >= tree
  );
  const computeScore = (index: number, length: number) =>
    index === -1 ? length : index + 1;
  return (
    computeScore(rightIndex, treeRightRow.length) *
    computeScore(leftIndex, treeLeftRow.length) *
    computeScore(topIndex, treeTopColumn.length) *
    computeScore(bottomIndex, treeBottomColumn.length)
  );
}
export function solve(board: number[][]): number {
  return Math.max(
    ...board.reduce(
      (acc, row, i) => [...acc, ...row.map((_, j) => score(i, j, board))],
      []
    )
  );
}
