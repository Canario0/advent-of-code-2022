interface Cell {
  i: number;
  j: number;
  dist: number;
  trace: string;
}

function canStep(currHeight: string, nextHeight: string) {
  const sanitizedCurrHeight =
    currHeight === "S" ? "a" : currHeight === "E" ? "z" : currHeight;
  const sanitizedNextHeight =
    nextHeight === "S" ? "a" : nextHeight === "E" ? "z" : nextHeight;
  const diff: number =
    sanitizedNextHeight.charCodeAt(0) - sanitizedCurrHeight.charCodeAt(0);
  return diff <= 1;
}

export function findPath(grid: string[][], startingCell: Cell) {
  const rowLenght = grid[0].length;
  const visited: boolean[] = [];
  const queue: Cell[] = [startingCell];
  visited[startingCell.i * rowLenght + startingCell.j] = true;

  while (queue.length != 0) {
    const currCell = queue.shift();

    if (grid[currCell!.i][currCell!.j] === "E") {
      return currCell!.dist;
    }

    // Moving Up
    if (
      currCell!.i - 1 >= 0 &&
      !visited[(currCell!.i - 1) * rowLenght + currCell!.j] &&
      canStep(
        grid[currCell!.i][currCell!.j],
        grid[currCell!.i - 1][currCell!.j]
      )
    ) {
      queue.push({
        i: currCell!.i - 1,
        j: currCell!.j,
        dist: currCell!.dist + 1,
        trace: currCell!.trace + grid[currCell!.i - 1][currCell!.j],
      });
      visited[(currCell!.i - 1) * rowLenght + currCell!.j] = true;
    }

    // Moving Down
    if (
      currCell!.i + 1 < grid.length &&
      !visited[(currCell!.i + 1) * rowLenght + currCell!.j] &&
      canStep(
        grid[currCell!.i][currCell!.j],
        grid[currCell!.i + 1][currCell!.j]
      )
    ) {
      queue.push({
        i: currCell!.i + 1,
        j: currCell!.j,
        dist: currCell!.dist + 1,
        trace: currCell!.trace + grid[currCell!.i + 1][currCell!.j],
      });
      visited[(currCell!.i + 1) * rowLenght + currCell!.j] = true;
    }

    // Moving Right
    if (
      currCell!.j + 1 < rowLenght &&
      !visited[currCell!.i * rowLenght + (currCell!.j + 1)] &&
      canStep(
        grid[currCell!.i][currCell!.j],
        grid[currCell!.i][currCell!.j + 1]
      )
    ) {
      queue.push({
        i: currCell!.i,
        j: currCell!.j + 1,
        dist: currCell!.dist + 1,
        trace: currCell!.trace + grid[currCell!.i][currCell!.j + 1],
      });
      visited[currCell!.i * rowLenght + (currCell!.j + 1)] = true;
    }

    // Moving left
    if (
      currCell!.j - 1 >= 0 &&
      !visited[currCell!.i * rowLenght + (currCell!.j - 1)] &&
      canStep(
        grid[currCell!.i][currCell!.j],
        grid[currCell!.i][currCell!.j - 1]
      )
    ) {
      queue.push({
        i: currCell!.i,
        j: currCell!.j - 1,
        dist: currCell!.dist + 1,
        trace: currCell!.trace + grid[currCell!.i][currCell!.j - 1],
      });
      visited[currCell!.i * rowLenght + (currCell!.j - 1)] = true;
    }
  }
  return -1;
}

export function solve(grid: string[][]): number {
  const startingPoistions = grid.map((row, index) => [
    index,
    row.findIndex((v) => v === "a" || v === "S"),
  ]);
  const solutions = startingPoistions.map(([i, j]) =>
    findPath(grid, {
      i,
      j,
      dist: 0,
      trace: `${i},${j} ${grid[i][j]}`,
    })
  );
  return Math.min(...solutions.filter((sol) => sol !== -1));
}
