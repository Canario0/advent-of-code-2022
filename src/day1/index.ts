import { solve as solveOne } from "./part1.ts";
import { solve as solveTow } from "./part2.ts";

function processData(input: string): number[][] {
  return input
    .replace(/\n\n/g, ";")
    .split(";")
    .map((groupedInput) =>
      groupedInput
        .split("\n")
        .map((a) => a.replace("\r", ""))
        .map((value) => Number(value))
    );
}

export function solve(input: string, isPartTow = false) {
  const cleanInputs = processData(input);
  if (isPartTow) {
    return solveTow(cleanInputs);
  }
  return solveOne(cleanInputs);
}
