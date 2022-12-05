const STACK_REGEX = new RegExp(/^move (\d+) from (\d+) to (\d+)$/);

function playCommand(craneStacks: string[][], command: string): string[][] {
  const match = STACK_REGEX.exec(command) ?? [];
  let craneCount = Number(match[1]);
  const originStack = craneStacks[Number(match[2]) - 1];
  const destinationStack = craneStacks[Number(match[3]) - 1];
  while (craneCount > 0) {
    destinationStack.push(originStack.pop()!);
    craneCount--;
  }
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
