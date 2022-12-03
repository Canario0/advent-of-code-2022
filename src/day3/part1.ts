function computePriority(item: string): number {
  const charValue = item.charCodeAt(0);
  const modifier = charValue >= 97 ? 96 : 38;
  return charValue - modifier;
}

export function solve(compartments: string[][]): number {
  return compartments.reduce(
    (acc: number, [compartment1, compartment2]: string[]) => {
      const compartment2Set = new Set(compartment2);
      const item = compartment1
        .split("")
        .filter((item: string) => compartment2Set.has(item))[0];
      return acc + computePriority(item);
    },
    0
  );
}
