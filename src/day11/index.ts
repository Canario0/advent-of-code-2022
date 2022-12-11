import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string): string[][] {
  return input.split("\n\n").map((groupedInput) => groupedInput.split("\n"));
}

export function solve(input: string, isPartTow = false): number {
  const cleanInput = processData(input);
  if (isPartTow) {
    return solveTwo(cleanInput);
  }
  return solveOne(cleanInput);
}
