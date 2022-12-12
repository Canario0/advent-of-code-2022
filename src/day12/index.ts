import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string[]): string[][] {
  return input.map((row) => row.trim().split(""));
}

export function solve(input: string[], isPartTow = false): number {
  const cleanInput = processData(input);
  if (isPartTow) {
    return solveTwo(cleanInput);
  }
  return solveOne(cleanInput);
}
