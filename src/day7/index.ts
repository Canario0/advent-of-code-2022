import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

export function solve(input: string[], isPartTow = false): number {
  if (isPartTow) {
    return solveTwo(input);
  }
  return solveOne(input);
}
