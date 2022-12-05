const STACK_REGEX = new RegExp(/^move (\d+) from (\d+) to (\d+)$/);

function playCommand(craneStacks: string[][], command: string): string[][] {
  if (!command) {
    return craneStacks;
  }

  const match = STACK_REGEX.exec(command) ?? [];
  const craneCount = -Number(match[1]);
  const originStackIndex = Number(match[2]) - 1;
  const originStack = craneStacks[originStackIndex];
  const destinationStack = craneStacks[Number(match[3]) - 1];

  destinationStack.push(...originStack.slice(craneCount));
  originStack.splice(originStack.length + craneCount);

  return craneStacks;
}

export function solve(
  craneStacks: string[][],
  rearrangeProcedure: string[]
): string {
  return rearrangeProcedure
    .reduce(playCommand, craneStacks)
    .map((stack) => stack.pop())
    .join("");
}
