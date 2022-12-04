import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string[]): number[][][] {
  return input
    .map((rawSection) => rawSection.split(","))
    .map(([section, otherSection]) => [
      section.split("-").map(Number),
      otherSection.split("-").map(Number),
    ]);
}

export function solve(input: string[], isPartTow = false): number {
  const cleanInputs = processData(input);
  if (isPartTow) {
    return solveTwo(cleanInputs);
  }
  return solveOne(cleanInputs);
}
