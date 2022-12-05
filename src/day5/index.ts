import { solve as solveOne } from "./part1.ts";
import { solve as solveTwo } from "./part2.ts";

function processData(input: string): {
  craneStacks: string[][];
  rearrangeProcedure: string[];
} {
  const [rawStack, rawRearrangeProcedure] = input.split("\n\n");
  return {
    craneStacks: rawStack
      .replace(/[\[\]]/g, "")
      .split("\n")
      .slice(0, -1)
      .reduce((acc, row) => {
        const cranes = row.split(/\s{1,4}/g);
        do {
          const crane = cranes.pop();
          if (crane) {
            const pos = cranes.length;
            if (!acc[pos]) {
              acc[pos] = [];
            }
            acc[pos].unshift(crane);
          }
        } while (cranes.length > 0);
        return acc;
      }, [] as string[][]),
    rearrangeProcedure: rawRearrangeProcedure.split("\n"),
  };
}

export function solve(input: string, isPartTow = false): string {
  const { craneStacks, rearrangeProcedure } = processData(input);
  if (isPartTow) {
    return solveTwo(craneStacks, rearrangeProcedure);
  }
  return solveOne(craneStacks, rearrangeProcedure);
}
