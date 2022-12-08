import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processdata(input: string[]): number[][] {
  return input.map((row) => row.split("").map((value) => Number(value)));
}

export function solve(input: string[], isPartTow = false): number {
  const board = processdata(input);
  if (isPartTow) {
    return solveTwo(board);
  }
  return solveOne(board);
}
