import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string[]): string[][] {
  return input.map((rawPlay) => rawPlay.trim().split(" "));
}

export function solve(input: string[], isPartTow = false): number {
  const cleanInputs = processData(input);
  if (isPartTow) {
    return solveTwo(cleanInputs);
  }
  return solveOne(cleanInputs);
}
