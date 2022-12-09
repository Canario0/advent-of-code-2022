import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processdata(input: string[]): [string, number][] {
  return input.map((row) => {
    const [command, unit] = row.split(" ");
    return [command, Number(unit)];
  });
}

export function solve(input: string[], isPartTow = false): number {
  const commands = processdata(input);
  if (isPartTow) {
    return solveTwo(commands);
  }
  return solveOne(commands);
}
