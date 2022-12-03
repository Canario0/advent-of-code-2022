import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string[]): string[][] {
  return input.map((rawSack) => {
    return [
      rawSack.substring(0, rawSack.length / 2),
      rawSack.substring(rawSack.length / 2),
    ];
  });
}

export function solve(input: string[], isPartTow = false): number {
  const cleanInputs = processData(input);
  if (isPartTow) {
    return solveTwo(input);
  }
  return solveOne(cleanInputs);
}
