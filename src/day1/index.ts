import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string): number[][] {
  return input
    .split("\n\n")
    .map((groupedInput) =>
      groupedInput.split("\n").map((value) => Number(value))
    );
}

export function solve(input: string, isPartTow = false) {
  const cleanInputs = processData(input);
  if (isPartTow) {
    return solveTwo(cleanInputs);
  }
  return solveOne(cleanInputs);
}
